import { useEffect, useState } from 'react';
import { Headers, Sections } from '../../components';

const TarotPage = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  useEffect(() => {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

    cards.forEach((card, index) => {
      card.style.setProperty('--i', index.toString());
    });
  }, []);

  const handleCardClick = (index: number) => () => {
    if (selectedCards.includes(index)) {
      setSelectedCards((prev) => prev.filter((card) => card !== index));
    } else {
      if (selectedCards.length < 3) {
        setSelectedCards([...selectedCards, index]);
      }
    }
  };

  return (
    <main className="Pages TarotPage">
      <Headers title={'타로카드'} />
      <Sections>
        <h2>원하는 카드를 3장 선택하세요.</h2>
        <article>
          {selectedCards.map((cardIndex) => (
            <div
              key={cardIndex}
              className={`Selected ${selectedCards.includes(cardIndex) ? 'animate' : ''}`}
            >
              카드{cardIndex + 1}
            </div>
          ))}
        </article>
        <article>
          <div className="CardContainer">
            {[...Array(16)].map((_, index) => (
              <div key={index} className="card" onClick={handleCardClick(index)}>
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
