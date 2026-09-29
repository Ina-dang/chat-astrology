import { beforeEach, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import { SajuPage, SajuResultPage } from '../pages/saju';
import handler from '../../api/saju/result.js';

beforeEach(() => sessionStorage.clear());

function LocationProbe() {
  const location = useLocation();
  return <output aria-label="현재 주소">{`${location.pathname}${location.search}`}</output>;
}

const flow = (path = '/saju') => (
  <MemoryRouter initialEntries={[path]}>
    <LocationProbe />
    <Routes>
      <Route path="/saju" element={<SajuPage />} />
      <Route path="/saju/result" element={<SajuResultPage />} />
    </Routes>
  </MemoryRouter>
);

test('submits solar birth data without exposing it in the URL and renders calculated pillars', async () => {
  vi.spyOn(axios, 'post').mockImplementation(async (_url, body) => {
    let data;
    await handler({ method: 'POST', body }, {
      status() { return this; },
      json(value) { data = value; return this; },
    });
    return { data };
  });
  const user = userEvent.setup();
  render(flow());

  await user.type(screen.getByLabelText('태어난 해'), '1986');
  await user.type(screen.getByLabelText('태어난 달'), '5');
  await user.type(screen.getByLabelText('태어난 날'), '29');
  await user.type(screen.getByLabelText('출생시간'), '10:00');
  await user.click(screen.getByRole('button', { name: '명식 계산하기' }));

  expect(await screen.findByRole('heading', { name: '나의 명식' })).toBeInTheDocument();
  expect(screen.getByLabelText('현재 주소')).toHaveTextContent('/saju/result');
  expect(screen.getByLabelText('현재 주소')).not.toHaveTextContent('1986');
  expect(screen.getByText('병인', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('계(癸)', { exact: false })).toBeInTheDocument();
  expect(JSON.parse(sessionStorage.getItem('saju.input.v1'))).toEqual({
    calendarType: 'solar', birth: '1986-05-29', birthTime: '10:00', timeUnknown: false, leapMonth: false,
  });
});

test('allows lunar leap-month input with unknown birth time', async () => {
  const post = vi.spyOn(axios, 'post').mockImplementation(async (_url, body) => {
    let data;
    await handler({ method: 'POST', body }, {
      status() { return this; },
      json(value) { data = value; return this; },
    });
    return { data };
  });
  const user = userEvent.setup();
  render(flow());

  await user.click(screen.getByRole('radio', { name: '음력' }));
  await user.type(screen.getByLabelText('태어난 해'), '2023');
  await user.type(screen.getByLabelText('태어난 달'), '2');
  await user.type(screen.getByLabelText('태어난 날'), '1');
  await user.click(screen.getByRole('checkbox', { name: '윤달' }));
  await user.click(screen.getByRole('checkbox', { name: '출생시간을 모릅니다' }));
  await user.click(screen.getByRole('button', { name: '명식 계산하기' }));

  await screen.findByRole('heading', { name: '나의 명식' });
  expect(post.mock.calls[0][1]).toEqual({
    calendarType: 'lunar', birth: '2023-02-01', birthTime: '', timeUnknown: true, leapMonth: true,
  });
  expect(screen.getByText(/2023-03-22 양력/)).toBeInTheDocument();
  expect(screen.getByText(/출생시간 모름/)).toBeInTheDocument();
  expect(screen.queryByRole('columnheader', { name: '시주' })).not.toBeInTheDocument();
});

test('result reload recovers the input but malformed storage does not call the API', async () => {
  sessionStorage.setItem('saju.input.v1', JSON.stringify({
    calendarType: 'solar', birth: '1986-05-29', birthTime: '10:00', timeUnknown: false, leapMonth: false,
  }));
  const post = vi.spyOn(axios, 'post').mockRejectedValue(new Error('offline'));
  const view = render(flow('/saju/result'));
  expect(await screen.findByRole('alert')).toHaveTextContent('offline');
  expect(post).toHaveBeenCalledTimes(1);

  view.unmount();
  post.mockClear();
  sessionStorage.setItem('saju.input.v1', '{broken');
  render(flow('/saju/result'));
  expect(screen.getByRole('alert')).toHaveTextContent('출생 정보가 없습니다');
  expect(post).not.toHaveBeenCalled();
});

test('generates one AI interpretation and reuses it from session storage', async () => {
  const input = {
    calendarType: 'solar', birth: '1986-05-29', birthTime: '10:00', timeUnknown: false, leapMonth: false,
  };
  sessionStorage.setItem('saju.input.v1', JSON.stringify(input));
  const post = vi.spyOn(axios, 'post').mockImplementation(async (url, body) => {
    if (url.endsWith('/api/saju/interpretation')) {
      return { data: { code: 'OK', data: {
        overview: '차분한 전체 흐름', strengths: '정리하는 강점', balance: '수 기운의 균형',
        guidance: '속도를 조절하세요.', limitation: '전통적 해석에 기반한 참고 정보입니다.',
      } } };
    }
    let data;
    await handler({ method: 'POST', body }, {
      status() { return this; },
      json(value) { data = value; return this; },
    });
    return { data };
  });
  const user = userEvent.setup();
  const view = render(flow('/saju/result'));

  await screen.findByRole('heading', { name: '나의 명식' });
  await user.click(screen.getByRole('button', { name: 'AI 종합 해석 보기' }));
  expect(await screen.findByText('차분한 전체 흐름')).toBeInTheDocument();
  expect(post).toHaveBeenCalledTimes(2);

  view.unmount();
  render(flow('/saju/result'));
  expect(await screen.findByText('차분한 전체 흐름')).toBeInTheDocument();
  expect(post).toHaveBeenCalledTimes(3);
});
