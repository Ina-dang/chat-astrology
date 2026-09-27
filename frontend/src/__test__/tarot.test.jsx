import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { TarotPage, TarotResultPage } from '../pages/tarot';
import { cardIds, cards, createReading, readingKey, readReading, saveReading } from '../pages/tarot/tarot';
import { IMAGES } from '../assets';
import handler from '../../api/tarot/result.js';

beforeEach(() => {
  sessionStorage.clear();
  vi.spyOn(Math, 'random').mockReturnValue(0.9);
});
afterEach(() => vi.restoreAllMocks());

const flow = (path = '/tarot') => (
  <MemoryRouter initialEntries={[path]}>
    <Routes>
      <Route path="/tarot" element={<TarotPage />} />
      <Route path="/tarot/result" element={<TarotResultPage />} />
    </Routes>
  </MemoryRouter>
);

test('three-card selection survives rerenders, retry, back navigation and reload', async () => {
  saveReading({ deck: cardIds, selected: [], spread: 'three' });
  let fail = true;
  const post = vi.spyOn(axios, 'post').mockImplementation(async (_url, body) => {
    if (fail) { fail = false; throw new Error('offline'); }
    let data;
    await handler({ method: 'POST', body }, { json: (value) => { data = value; } });
    return { data };
  });
  const user = userEvent.setup();
  const view = render(flow());
  await user.click(screen.getByRole('button', { name: '1번째 카드 선택' }));
  await user.click(screen.getByRole('button', { name: '2번째 카드 선택' }));
  view.rerender(flow());
  expect(readReading().selected).toEqual([
    { id: 'FOOL', orientation: 'reversed' },
    { id: 'MAGICIAN', orientation: 'reversed' },
  ]);
  await user.click(screen.getByRole('button', { name: '3번째 카드 선택' }));
  await user.click(screen.getByRole('button', { name: '풀이 보기' }));
  await screen.findByRole('alert');
  expect(screen.getByAltText('광대 역방향')).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: '같은 카드로 다시 시도' }));
  await screen.findByRole('heading', { name: '과거 · 광대' });
  const expected = {
    spread: 'three',
    cards: [
      { id: 'FOOL', orientation: 'reversed' },
      { id: 'MAGICIAN', orientation: 'reversed' },
      { id: 'PRIESTESS', orientation: 'reversed' },
    ],
  };
  expect(post.mock.calls.map((call) => call[1])).toEqual([expected, expected]);
  await user.click(screen.getByRole('link', { name: '카드 선택으로 돌아가기' }));
  expect(screen.getByRole('status')).toHaveTextContent('3 / 3장');
  view.unmount();
  render(flow('/tarot/result'));
  await screen.findByRole('heading', { name: '현재 · 마법사' });
  expect(post.mock.calls[2][1]).toEqual(expected);
});

test('one-card spread completes with one stable reversed card', async () => {
  saveReading({ deck: cardIds, selected: [], spread: 'three' });
  vi.spyOn(Math, 'random').mockReturnValue(0.9);
  vi.spyOn(axios, 'post').mockImplementation(async (_url, body) => {
    let data;
    await handler({ method: 'POST', body }, { json: (value) => { data = value; } });
    return { data };
  });
  const user = userEvent.setup();
  render(flow());
  await user.click(screen.getByRole('radio', { name: /한 장/ }));
  await user.click(screen.getByRole('button', { name: '1번째 카드 선택' }));
  expect(screen.getByRole('status')).toHaveTextContent('1 / 1장');
  await user.click(screen.getByRole('button', { name: '풀이 보기' }));
  expect(await screen.findByAltText(/역방향/)).toHaveClass('is-reversed');
  expect(screen.getByRole('heading', { name: /지금의 핵심/ })).toBeInTheDocument();
});

test('missing or mismatched selections never display a reading', async () => {
  const post = vi.spyOn(axios, 'post');
  const view = render(flow('/tarot/result'));
  expect(screen.getByRole('alert')).toHaveTextContent('선택한 카드가 없습니다');
  expect(post).not.toHaveBeenCalled();
  view.unmount();

  saveReading({
    deck: cardIds,
    spread: 'one',
    selected: [{ id: 'FOOL', orientation: 'upright' }],
  });
  post.mockResolvedValue({ data: { code: 'OK', data: {
    spread: 'one',
    cards: [{ id: 'SUN', orientation: 'upright', position: 'focus', interpretation: 'wrong reading' }],
  } } });
  render(flow('/tarot/result'));
  await screen.findByRole('alert');
  expect(screen.queryByText('wrong reading')).not.toBeInTheDocument();
});

test('invalid saved data is discarded and every deck card has an image', async () => {
  sessionStorage.setItem(readingKey, '{broken');
  expect(readReading()).toBeNull();
  saveReading({
    deck: cardIds,
    spread: 'three',
    selected: [{ id: 'FOOL', orientation: 'upright' }, { id: 'FOOL', orientation: 'reversed' }],
  });
  expect(readReading()).toBeNull();
  const reading = createReading();
  expect([...reading.deck].sort()).toEqual([...cardIds].sort());
  expect(reading.selected).toEqual([]);
  expect(cardIds).toHaveLength(78);
  for (const id of cardIds) {
    expect(cards[id].name).toBeTruthy();
    expect(IMAGES[id] ?? cards[id].image).toBeTruthy();
  }
  render(flow());
  await waitFor(() => expect(readReading().selected).toEqual([]));
});
