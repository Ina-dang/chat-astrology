// @vitest-environment node
import { expect, test } from 'vitest';
import handler from './health.js';

function request(method) {
  const response = {
    statusCode: 200,
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; },
  };
  handler({ method }, response);
  return response;
}

test('reports service health and rejects non-GET requests', () => {
  const healthy = request('GET');
  expect(healthy.body).toMatchObject({ code: 'OK', service: 'woldam' });
  expect(Number.isNaN(Date.parse(healthy.body.time))).toBe(false);
  expect(request('POST')).toMatchObject({ statusCode: 405, headers: { Allow: 'GET' } });
});
