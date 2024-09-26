import { useEffect, useState } from 'react';
import { IMAGES } from '../../assets';
import { Headers, Sections } from '../../components';
import { cardNames, ExtendedCSSProperties, initialTarotData, SelectedCards } from './types';
import { useNavigate } from 'react-router-dom';

const getRandomizedCards = () => {
  const shuffled = [...cardNames].sort(() => 0.5 - Math.random());
  return shuffled;
};

const TarotPage = () => {
  const cards = getRandomizedCards();
  const [selectedCards, setSelectedCards] = useState<SelectedCards>(initialTarotData);
  const navigate = useNavigate();

  useEffect(() => {
    const cardCss = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

    cardCss.forEach((card, index) => {
      card.style.setProperty('--i', index.toString());
    });
  }, []);

  useEffect(() => {
    const { past, present, future } = selectedCards;
    if (past !== null && present !== null && future !== null) {
      console.log('마지막장 선택완료::', selectedCards);
      const { past, present, future } = selectedCards;
      navigate(`/tarot/result?past=${past}&present=${present}&future=${future}`);
      // TODO 다음페이지로 넘어가는 효과 자연스럽게
    }
  }, [selectedCards]);

  const handleCardClick = (index: number) => async () => {
    setSelectedCards((prevSelections) => {
      const currentSelection = [prevSelections.past, prevSelections.present, prevSelections.future];
      const cardName = cards[index];

      if (currentSelection.includes(cardName)) {
        const newSelections = currentSelection.filter((name) => name !== cardName);
        newSelections.push(null);
        return {
          past: newSelections[0],
          present: newSelections[1],
          future: newSelections[2],
        };
      } else {
        // 카드가 선택되지 않은 경우
        const newSelections = [...currentSelection];
        if (newSelections[0] === null) {
          newSelections[0] = cardName;
        } else if (newSelections[1] === null) {
          newSelections[1] = cardName;
        } else if (newSelections[2] === null) {
          newSelections[2] = cardName;
        }
        return {
          past: newSelections[0],
          present: newSelections[1],
          future: newSelections[2],
        };
      }
    });
  };

  return (
    <main className="Pages TarotPage">
      <Headers title={'타로카드'} />
      <Sections>
        <h2>원하는 카드를 3장 선택하세요.</h2>
        <article>
          {Object.entries(selectedCards).map(([key, cardName]) => {
            console.log(IMAGES[cardName]);
            return (
              cardName && (
                <div key={key} className={`CardWrap  ${cardName ? 'animate' : ''}`}>
                  <div
                    className={'Selected'}
                    style={{ '--card-src': `url(${IMAGES[cardName]})` } as ExtendedCSSProperties}
                  ></div>
                  <div>{cardName}</div>
                </div>
              )
            );
          })}
        </article>
        <article>
          <div className="CardContainer">
            {[...Array(16)].map((_, index) => (
              <div key={index} className="card" onClick={handleCardClick(index)}></div>
            ))}
          </div>
        </article>
      </Sections>
      <footer></footer>
    </main>
  );
};

export { TarotPage };
