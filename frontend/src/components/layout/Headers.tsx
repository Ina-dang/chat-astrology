import { IMAGES } from '../../assets';

interface HeaderProps {
  title: string;
}

const Headers: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <button
        onClick={() => {
          window.history.back();
        }}
      >
        <img src={IMAGES.ARROW_LEFT} alt="arrow left" />
      </button>
      <h1>{title}</h1>
    </header>
  );
};

export { Headers };
