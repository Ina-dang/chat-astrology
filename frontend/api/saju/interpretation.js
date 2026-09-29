import { calculateSaju } from '../_tools.js';

const schema = {
  type: 'object',
  properties: {
    overview: { type: 'string' },
    strengths: { type: 'string' },
    balance: { type: 'string' },
    guidance: { type: 'string' },
    limitation: { type: 'string' },
  },
  required: ['overview', 'strengths', 'balance', 'guidance', 'limitation'],
  additionalProperties: false,
};

const elementGuide = {
  목: '성장·기획·확장',
  화: '표현·활력·확산',
  토: '안정·조율·축적',
  금: '판단·정리·결단',
  수: '통찰·유연성·흐름',
};

function extractOutputText(response) {
  return response.output
    ?.flatMap((item) => item.content ?? [])
    .find((content) => content.type === 'output_text')?.text;
}

function isInterpretation(value) {
  return value && typeof value === 'object' &&
    ['overview', 'strengths', 'balance', 'guidance', 'limitation']
      .every((key) => typeof value[key] === 'string' && value[key].trim());
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ code: 'ERROR', message: 'POST 요청만 가능합니다.' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({ code: 'NOT_CONFIGURED', message: 'AI 해석 설정이 필요합니다.' });
  }

  let chart;
  try {
    chart = calculateSaju(req.body ?? {});
  } catch {
    return res.status(400).json({ code: 'ERROR', message: '출생 정보를 확인해 주세요.' });
  }

  const chartSummary = {
    timeKnown: Boolean(chart.calendar.birthTime),
    dayMaster: chart.dayMaster,
    elements: chart.elements,
    pillars: chart.pillars.map((pillar) => ({
      label: pillar.label,
      hanja: pillar.hanja,
      tenGodStem: pillar.tenGodStem,
      tenGodBranches: pillar.tenGodBranches,
      twelveStage: pillar.twelveStage,
    })),
  };

  try {
    const openaiResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(25000),
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5-mini',
        store: false,
        reasoning: { effort: 'minimal' },
        max_output_tokens: 1200,
        instructions: [
          '당신은 전통 명리학의 상징 체계를 설명하는 한국어 해설자다.',
          '제공된 명식 계산값과 오행 안내만 근거로 사용한다.',
          '용신·대운·세운처럼 입력에 없는 내용을 추정하지 않는다.',
          '미래를 단정하거나 의료·법률·투자 결정을 지시하지 않는다.',
          '각 항목은 쉬운 존댓말로 2~3문장만 작성하고 서로 같은 말을 반복하지 않는다.',
          '출생시간이 없으면 시주가 제외되어 해석 범위가 좁다는 점을 limitation에 밝힌다.',
          '사주는 과학적 예측이 아닌 전통적 해석이라는 점을 limitation에 포함한다.',
        ].join(' '),
        input: `오행 안내: ${JSON.stringify(elementGuide)}\n명식 계산값: ${JSON.stringify(chartSummary)}`,
        text: {
          verbosity: 'low',
          format: {
            type: 'json_schema',
            name: 'saju_interpretation',
            strict: true,
            schema,
          },
        },
      }),
    });

    if (!openaiResponse.ok) {
      console.error(`OpenAI response failed with status ${openaiResponse.status}`);
      const status = openaiResponse.status === 429 ? 429 : 502;
      const message = status === 429
        ? 'AI 해석 사용량이 많습니다. 잠시 후 다시 시도해 주세요.'
        : 'AI 해석을 생성하지 못했습니다.';
      return res.status(status).json({ code: 'AI_ERROR', message });
    }

    const response = await openaiResponse.json();
    const outputText = extractOutputText(response);
    const interpretation = outputText ? JSON.parse(outputText) : null;
    if (response.status !== 'completed' || !isInterpretation(interpretation)) {
      throw new Error('INVALID_AI_RESPONSE');
    }

    return res.json({
      code: 'OK',
      message: 'AI 종합 해석을 생성했습니다.',
      data: interpretation,
      usage: {
        model: response.model,
        inputTokens: response.usage?.input_tokens ?? null,
        outputTokens: response.usage?.output_tokens ?? null,
      },
    });
  } catch (error) {
    console.error('OpenAI interpretation failed', error instanceof Error ? error.message : error);
    return res.status(502).json({ code: 'AI_ERROR', message: 'AI 해석을 생성하지 못했습니다.' });
  }
}
