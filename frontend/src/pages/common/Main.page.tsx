import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const handleRoute = (href: string) => () => {
    navigate(href);
  };
  return (
    <main className="MainPage">
      <header>
        <h1>GPT가 말아주는 사주&타로</h1>
      </header>
      <section>
        {routing.map((item) => (
          <button onClick={handleRoute(item.label)}>
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
    label: '사주보기',
    href: '/saju',
  },
  {
    label: '타로보기',
    href: '/taro',
  },
  {
    label: '로그인 하여 사주장소 추천받기',
    href: '/login',
  },
];

export { MainPage };
