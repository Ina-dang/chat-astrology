// @vitest-environment node
import { expect, test } from 'vitest';
import handler from './result.js';
import { handleTarotRequest } from '../_tools.js';
import { handleTarotRequest as developmentHandler } from '../../../backend/tools.js';
import { createRequire } from 'node:module';

const cards = createRequire(import.meta.url)('../../src/data/tarot-cards.json');

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

test('development and deployment share the handler and all 78 cards have upright and reversed readings', async () => {
  expect(developmentHandler).toBe(handleTarotRequest);
  const ids = Object.keys(cards);
  expect(ids).toHaveLength(78);
  for (const id of ids) {
    for (const orientation of ['upright', 'reversed']) {
      const response = await request({ spread: 'one', cards: [{ id, orientation }] });
      expect(response.statusCode).toBe(200);
      expect(response.body.code).toBe('OK');
      expect(response.body.data.cards[0]).toMatchObject({ id, orientation, position: 'focus' });
      expect(response.body.data.cards[0].keywords.length).toBeGreaterThan(0);
      expect(response.body.data.cards[0].interpretation.length).toBeGreaterThan(0);
    }
  }
});

test('returns a three-card spread without changing card order or orientation', async () => {
  const selected = [
    { id: 'FOOL', orientation: 'upright' },
    { id: 'CUPS_10', orientation: 'reversed' },
    { id: 'PENTACLES_14', orientation: 'upright' },
  ];
  const response = await request({ spread: 'three', cards: selected });
  expect(response.body.data.cards.map(({ id, orientation, position }) => ({ id, orientation, position })))
    .toEqual([
      { ...selected[0], position: 'past' },
      { ...selected[1], position: 'present' },
      { ...selected[2], position: 'future' },
    ]);
});

test('rejects malformed, duplicate and unknown cards', async () => {
  const valid = {
    spread: 'three',
    cards: [
      { id: 'FOOL', orientation: 'upright' },
      { id: 'MAGICIAN', orientation: 'reversed' },
      { id: 'WORLD', orientation: 'upright' },
    ],
  };
  for (const body of [null, undefined, [], {}, { spread: 'one', cards: [] },
    { ...valid, cards: [valid.cards[0], valid.cards[0], valid.cards[2]] },
    { ...valid, cards: [{ id: 'constructor', orientation: 'upright' }, ...valid.cards.slice(1)] },
    { ...valid, cards: [{ id: 'FOOL', orientation: 'sideways' }] },
    { ...valid, extra: true }]) {
    const response = await request(body);
    expect(response.statusCode).toBe(400);
    expect(response.body.code).toBe('ERROR');
  }
});

test('rejects non-POST requests with Allow header', async () => {
  const response = await request(undefined, 'GET');
  expect(response.statusCode).toBe(405);
  expect(response.headers.Allow).toBe('POST');
});

