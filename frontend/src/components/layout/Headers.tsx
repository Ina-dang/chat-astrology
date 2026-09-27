interface HeaderProps {
  title: string;
}

const Headers: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <button
        type="button"
        aria-label="이전 화면으로 이동"
        onClick={() => {
          window.history.back();
        }}
      >
        이전
      </button>
      <h1>{title}</h1>
    </header>
  );
};

export { Headers };
