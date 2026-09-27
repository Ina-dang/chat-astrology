import React from 'react';
import { Link } from 'react-router-dom';
import { LOCALES } from '../../assets';
import { Footer } from '../../components';

const STR_COM = LOCALES.COMMON;
const MainPage: React.FC = () => {
  return (
    <main className="MainPage">
      <header className="MainHeader">
        <div className="MainBrand" aria-label={STR_COM.TITLE}>
          <span aria-hidden="true">月談</span>
          <small>GPT 사주·타로</small>
        </div>
        <span className="MainHeaderMeta">사주 · 타로 · 포춘쿠키</span>
      </header>

      <section className="MainContent" aria-labelledby="main-title">
        <div className="MainHero">
          <div className="MainMoon" aria-hidden="true"><span /></div>
          <h1 id="main-title">명식을 확인하고<br />질문의 카드를 펼쳐보세요</h1>
          <p>생년월일시로 명식을 계산하거나 질문을 정하고 카드를 선택할 수 있습니다.</p>
        </div>

        <nav className="MainActions" aria-label="운세 메뉴">
        {routing.map((item) => (
          <Link
            to={item.href}
            key={item.label}
            className={`MainAction${item.featured ? ' is-featured' : ''}`}
          >
            <span className="MainSeal" aria-hidden="true">{item.symbol}</span>
            <span className="MainActionCopy">
              <strong>{item.label}</strong>
              <span>{item.description}</span>
            </span>
          </Link>
        ))}
        </nav>
      </section>
      <Footer />
    </main>
  );
};

const routing = [
  {
    label: '오늘의 포춘쿠키 열기',
    description: '쿠키를 열어 오늘의 한마디 확인',
    href: '/fortune',
    symbol: '福',
    featured: true,
  },
  {
    label: `${STR_COM.SAJU} 명식 보기`,
    description: '생년월일시로 오행과 흐름 확인',
    href: '/saju',
    symbol: '命',
  },
  {
    label: `${STR_COM.TARO} 카드 펼치기`,
    description: '질문을 정하고 카드 선택',
    href: '/tarot',
    symbol: '占',
  },
];

export { MainPage };
