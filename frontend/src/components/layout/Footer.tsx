import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav className="SiteLinks" aria-label="서비스 안내">
        <Link to="/privacy">개인정보·서비스 안내</Link>
        <a href="https://github.com/Ina-dang/chat-astrology" target="_blank" rel="noreferrer">소스·라이선스</a>
      </nav>
      <div className="kakaoAdd">
        <ins
          className="kakaoAdArea"
          style={{ display: 'none' }}
          data-ad-unit="DAN-XtUlfyiwPrPohP8p"
          data-ad-width="380"
          data-ad-height="50"
        ></ins>
      </div>
    </footer>
  );
};

export { Footer };
