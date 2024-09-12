import { CSSProperties, Fragment, useEffect, useState } from 'react';
import { Headers, Sections } from '../../components';
import { IMAGES } from '../../assets';

interface ExtendedCSSProperties extends CSSProperties {
  '--card-src'?: string;
}

interface SelectedCards {
  past: TarotCardName | null;
  present: TarotCardName | null;
  future: TarotCardName | null;
}

const initialTarotData = {
  past: null,
  present: null,
  future: null,
};

type TarotCardName =
  | 'FOOL'
  | 'MAGICIAN'
  | 'PRIESTESS'
  | 'EMPRESS'
  | 'EMPEROR'
  | 'HIEROPHANT'
  | 'LOVERS'
  | 'CHARIOT'
  | 'STRENGTH'
  | 'HERMIT'
  | 'FORTUNE'
  | 'JUSTICE'
  | 'HANGEDMAN'
  | 'DEATH'
  | 'TEMPERANCE'
  | 'DEVIL'
  | 'TOWER'
  | 'STAR'
  | 'MOON'
  | 'SUN'
  | 'JUDGEMENT'
  | 'WORLD';

const cardNames: TarotCardName[] = [
  'FOOL', // '바보', // The Fool
  'MAGICIAN', // '마법사', // The Magician
  'PRIESTESS', // '여사제', // The High Priestess
  'EMPRESS', // '여제', // The Empress
  'EMPEROR', // '황제', // The Emperor
  'HIEROPHANT', // '교황', // The Hierophant
  'LOVERS', // '연인', // The Lovers
  'CHARIOT', // '전차', // The Chariot
  'STRENGTH', // '힘', // Strength
  'HERMIT', // '은둔자', // The Hermit
  'FORTUNE', // '운명의 수레바퀴', // Wheel of Fortune
  'JUSTICE', // '정의', // Justice
  'HANGEDMAN', // '매달린 남자', // The Hanged Man
  'DEATH', // '죽음', // Death
  'TEMPERANCE', // '절제', // Temperance
  'DEVIL', // '악마', // The Devil
  'TOWER', // '탑', // The Tower
  'STAR', // '별', // The Star
  'MOON', // '달', // The Moon
  'SUN', // '태양', // The Sun
  'JUDGEMENT', // '심판', // Judgment
  'WORLD', // '세계', // The World
];

const getRandomizedCards = () => {
  const shuffled = [...cardNames].sort(() => 0.5 - Math.random());
  return shuffled;
};

const TarotPage = () => {
  const cards = getRandomizedCards();
  const [selectedCards, setSelectedCards] = useState<SelectedCards>(initialTarotData);

  useEffect(() => {
    const cardCss = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

    cardCss.forEach((card, index) => {
      card.style.setProperty('--i', index.toString());
    });
  }, []);

  useEffect(() => {
    const { past, present, future } = selectedCards;
    if (past !== null && present !== null && future !== null) {
      console.log(selectedCards);
      // axios
      // .post(getApiEndpoint(`tarot/result`), selectedCards)
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
