import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <main className="Pages">
      <section className="Sections" id="main-content">
        <h1>페이지를 찾을 수 없습니다</h1>
        <p>주소를 다시 확인하거나 첫 화면으로 돌아가 주세요.</p>
        <Link className="Button" to="/">첫 화면으로 돌아가기</Link>
      </section>
    </main>
  );
};

export { ErrorPage };
