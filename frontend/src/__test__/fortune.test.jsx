import { beforeEach, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { FortuneResultPage } from '../pages/fortune';
import handler from '../../api/fortune/result/[id].js';

beforeEach(() => {
  vi.restoreAllMocks();
  window.history.replaceState({}, '', '/fortune/result');
});

const renderResult = () => render(
  <MemoryRouter>
    <FortuneResultPage />
  </MemoryRouter>,
);

test('a shared result URL reloads the fortune and exposes share actions', async () => {
  window.history.replaceState({}, '', '/fortune/result?id=1');
  vi.spyOn(axios, 'get').mockResolvedValue({
    data: { code: 'OK', data: { id: 1, message: '공유된 포춘쿠키' } },
  });

  renderResult();

  expect(screen.getByRole('status')).toHaveTextContent('불러오고 있습니다');
  expect(await screen.findByText('공유된 포춘쿠키')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '결과 링크 복사' })).toBeInTheDocument();
});

test('invalid shared IDs are rejected by the page and API', async () => {
  window.history.replaceState({}, '', '/fortune/result?id=invalid');
  const get = vi.spyOn(axios, 'get');

  renderResult();

  expect(screen.getByRole('alert')).toHaveTextContent('유효하지 않은');
  expect(screen.queryByRole('button', { name: '결과 링크 복사' })).not.toBeInTheDocument();
  expect(get).not.toHaveBeenCalled();

  let statusCode = 200;
  let body;
  await handler({ query: { id: '999999' } }, {
    status(code) { statusCode = code; return this; },
    json(value) { body = value; return this; },
    send(value) { body = value; return this; },
  });
  expect(statusCode).toBe(404);
  expect(body.code).toBe('NOT_FOUND');
});
