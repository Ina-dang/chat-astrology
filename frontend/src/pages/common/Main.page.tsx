import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCALES } from '../../assets';

const STR_COM = LOCALES.COMMON;
const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const handleRoute = (href: string) => () => {
    navigate(href);
  };
  return (
    <main className="MainPage">
      <header>
        <h1>{STR_COM.TITLE}</h1>
      </header>
      <section>
        {routing.map((item) => (
          <button onClick={handleRoute(item.href)} key={item.label}>
            <span>{item.label}</span>
          </button>
        ))}
      </section>
      <footer>광고자리</footer>
    </main>
  );
};

const routing = [
  {
    label: STR_COM.SAJU,
    href: '/saju',
  },
  {
    label: STR_COM.TARO,
    href: '/taro',
  },
  {
    label: '오늘의 포춘쿠키',
    href: '/fortune',
  },
  {
    label: STR_COM.LOGIN_AND_RECOMMEND,
    href: '/login',
  },
];

export { MainPage };
