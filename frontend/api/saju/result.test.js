// @vitest-environment node
import { expect, test } from 'vitest';
import handler from './result.js';
import { handleSajuRequest } from '../_tools.js';
import { handleSajuRequest as developmentHandler } from '../../../backend/tools.js';

async function request(body, method = 'POST') {
  const response = {
    statusCode: 200,
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(data) { this.body = data; return this; },
  };
  await handler({ body, method }, response);
  return response;
}

test('development and deployment use the same saju handler', () => {
  expect(developmentHandler).toBe(handleSajuRequest);
});

test('calculates distinct four pillars and element counts from solar birth data', async () => {
  const first = await request({
    calendarType: 'solar', birth: '1986-05-29', birthTime: '10:00', timeUnknown: false,
  });
  const second = await request({
    calendarType: 'solar', birth: '2001-12-31', birthTime: '15:00', timeUnknown: false,
  });

  expect(first.statusCode).toBe(200);
  expect(first.body.data.pillars.map((pillar) => pillar.hanja)).toEqual(['丙寅', '癸巳', '癸酉', '丁巳']);
  expect(first.body.data.dayMaster).toEqual({ name: '계', hanja: '癸', yinYang: '음', element: '수' });
  expect(Object.values(first.body.data.elements).reduce((sum, count) => sum + count, 0)).toBe(8);
  expect(first.body.data.engine).toMatchObject({ name: 'lunar-typescript', version: '1.8.6' });
  expect(first.body.data.calendar.solarDate).toBe('1986-05-29');
  expect(first.body.data.pillars.map((pillar) => pillar.hanja))
    .not.toEqual(second.body.data.pillars.map((pillar) => pillar.hanja));
});

test('converts lunar and leap-month input before calculating', async () => {
  const regular = await request({
    calendarType: 'lunar', birth: '2023-02-01', birthTime: '10:00', timeUnknown: false, leapMonth: false,
  });
  const leap = await request({
    calendarType: 'lunar', birth: '2023-02-01', birthTime: '10:00', timeUnknown: false, leapMonth: true,
  });

  expect(regular.body.data.calendar.solarDate).toBe('2023-02-20');
  expect(leap.body.data.calendar.solarDate).toBe('2023-03-22');
  expect(leap.body.data.calendar.lunarLeapMonth).toBe(true);
});

test('omits the time pillar when birth time is unknown', async () => {
  const response = await request({
    calendarType: 'solar', birth: '1986-05-29', birthTime: '', timeUnknown: true,
  });

  expect(response.statusCode).toBe(200);
  expect(response.body.data.pillars.map((pillar) => pillar.key)).toEqual(['year', 'month', 'day']);
  expect(Object.values(response.body.data.elements).reduce((sum, count) => sum + count, 0)).toBe(6);
});

test('rejects invalid methods and malformed or unsupported birth data', async () => {
  const valid = { calendarType: 'solar', birth: '1986-05-29', birthTime: '10:00', timeUnknown: false };
  const get = await request(undefined, 'GET');
  expect(get.statusCode).toBe(405);
  expect(get.headers.Allow).toBe('POST');

  for (const body of [
    null,
    {},
    { ...valid, calendarType: 'gregorian' },
    { ...valid, birth: '1986-02-30' },
    { ...valid, birth: '1899-12-31' },
    { ...valid, birth: '2999-01-01' },
    { ...valid, birthTime: '24:00' },
    { ...valid, timeUnknown: 'false' },
    { ...valid, calendarType: 'solar', leapMonth: true },
    { ...valid, extra: 'field' },
  ]) {
    const response = await request(body);
    expect(response.statusCode).toBe(400);
    expect(response.body.code).toBe('ERROR');
  }
});
