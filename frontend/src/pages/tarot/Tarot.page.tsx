import { useEffect } from 'react';
import { Headers, Sections } from '../../components';

const TarotPage = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

    const handleClick = (index: number) => {
      alert(`Card ${index + 1} clicked`);
    };

    cards.forEach((card, index) => {
      card.style.setProperty('--i', index.toString());

      card.removeEventListener('click', () => handleClick(index));
      card.addEventListener('click', () => handleClick(index));
    });

    return () => {
      cards.forEach((card, index) => {
        card.removeEventListener('click', () => handleClick(index));
      });
    };
  }, []);

  return (
    <main className="Pages TarotPage">
      <Headers title={'타로카드'} />
      <Sections>
        <h2>원하는 카드를 3장 선택하세요.</h2>
        <article></article>
        <article>
          <div className="CardContainer">
            {[...Array(16)].map((_, index) => (
              <div key={index} className="card">
                {index + 1}
              </div>
            ))}
          </div>
        </article>
      </Sections>
      <footer></footer>
    </main>
  );
};

export { TarotPage };
