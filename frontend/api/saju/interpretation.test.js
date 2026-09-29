// @vitest-environment node
import { afterEach, expect, test, vi } from 'vitest';
import handler from './interpretation.js';

const validInput = {
  calendarType: 'solar',
  birth: '1986-05-29',
  birthTime: '10:00',
  timeUnknown: false,
  leapMonth: false,
};

async function request(body = validInput) {
  const response = {
    statusCode: 200,
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(data) { this.body = data; return this; },
  };
  await handler({ method: 'POST', body }, response);
  return response;
}

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_MODEL;
});

test('sends only calculated chart data and returns structured interpretation', async () => {
  process.env.OPENAI_API_KEY = 'test-key';
  const interpretation = {
    overview: '전체 흐름',
    strengths: '강점',
    balance: '균형',
    guidance: '조언',
    limitation: '참고 정보',
  };
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      status: 'completed',
      model: 'gpt-5-mini',
      output: [{ content: [{ type: 'output_text', text: JSON.stringify(interpretation) }] }],
      usage: { input_tokens: 300, output_tokens: 200 },
    }),
  });
  vi.stubGlobal('fetch', fetchMock);

  const response = await request();
  const openaiBody = JSON.parse(fetchMock.mock.calls[0][1].body);

  expect(response.statusCode).toBe(200);
  expect(response.body.data).toEqual(interpretation);
  expect(response.body.usage).toEqual({ model: 'gpt-5-mini', inputTokens: 300, outputTokens: 200 });
  expect(openaiBody).toMatchObject({
    model: 'gpt-5-mini',
    store: false,
    reasoning: { effort: 'minimal' },
    max_output_tokens: 1200,
  });
  expect(openaiBody.input).toContain('丙寅');
  expect(openaiBody.input).not.toContain('1986-05-29');
});

test('does not call OpenAI without configuration or valid birth data', async () => {
  const fetchMock = vi.fn();
  vi.stubGlobal('fetch', fetchMock);

  const missingKey = await request();
  expect(missingKey.statusCode).toBe(503);

  process.env.OPENAI_API_KEY = 'test-key';
  const invalid = await request({ ...validInput, birth: '1986-02-30' });
  expect(invalid.statusCode).toBe(400);
  expect(fetchMock).not.toHaveBeenCalled();
});
