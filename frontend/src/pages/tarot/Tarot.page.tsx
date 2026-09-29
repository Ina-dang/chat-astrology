import { type CSSProperties, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Headers, Sections } from '../../components';
import { IMAGES } from '../../assets';
import {
  cards,
  CardId,
  createReading,
  positionNames,
  readReading,
  saveReading,
  Spread,
  spreadPositions,
} from './tarot';

const TarotPage = () => {
  const navigate = useNavigate();
  const [reading, setReading] = useState(() => readReading() ?? createReading());
  const [simpleMode, setSimpleMode] = useState(() => sessionStorage.getItem('tarot.simple.v1') === 'true');
  const positions = spreadPositions[reading.spread];
  const count = positions.length;

  useEffect(() => saveReading(reading), [reading]);
  useEffect(() => sessionStorage.setItem('tarot.simple.v1', String(simpleMode)), [simpleMode]);

  const selectCard = (id: CardId) => {
    setReading((previous) => {
      if (previous.selected.some((card) => card.id === id) || previous.selected.length === count) {
        return previous;
      }
      const orientation = Math.random() < 0.5 ? 'upright' : 'reversed';
      return { ...previous, selected: [...previous.selected, { id, orientation }] };
    });
  };

  const changeSpread = (spread: Spread) => setReading(createReading(spread));

  return (
    <main className="Pages TarotPage">
      <Headers title="타로카드" />
      <Sections>
        <h2>리딩 방식을 고르세요.</h2>
        <fieldset className="SpreadPicker">
          <legend>카드 수</legend>
          <label>
            <input type="radio" checked={reading.spread === 'one'} onChange={() => changeSpread('one')} />
            한 장 · 지금의 핵심
          </label>
          <label>
            <input type="radio" checked={reading.spread === 'three'} onChange={() => changeSpread('three')} />
            세 장 · 과거 / 현재 / 흐름
          </label>
        </fieldset>
        <p role="status">{reading.selected.length} / {count}장 선택됨</p>
        <div className={`TarotSlots is-${reading.spread}`}>
          {positions.map((position, index) => {
            const selected = reading.selected[index];
            return (
              <figure key={position}>
                <figcaption>{positionNames[position]}</figcaption>
                {selected ? (
                  <>
                    <img
                      className={selected.orientation === 'reversed' ? 'is-reversed' : undefined}
                      src={IMAGES[selected.id] ?? cards[selected.id].image}
                      alt={`${cards[selected.id].name} ${selected.orientation === 'upright' ? '정방향' : '역방향'}`}
                      decoding="async"
                      height="180"
                      width="120"
                    />
                    <p>{cards[selected.id].name} · {selected.orientation === 'upright' ? '정방향' : '역방향'}</p>
                  </>
                ) : <div className="EmptyCard">{index + 1}번째 카드</div>}
              </figure>
            );
          })}
        </div>
        <label className="ModeToggle">
          <input type="checkbox" checked={simpleMode} onChange={(event) => setSimpleMode(event.target.checked)} />
          카드를 겹치지 않고 보기
        </label>
        <p id="deck-help">{simpleMode ? '전체 카드를 격자로 보고 고르세요.' : '펼쳐진 덱을 좌우로 넘겨 카드를 골라 주세요.'} 선택한 카드와 방향은 결과까지 유지됩니다.</p>
        <div className={`TarotDeck${simpleMode ? ' is-simple' : ''}`} role="group" aria-label="78장 타로카드 덱" aria-describedby="deck-help">
          {reading.deck.map((id, index) => {
            const selected = reading.selected.some((card) => card.id === id);
            return (
              <button
                key={id}
                type="button"
                className="card"
                style={{ '--card-index': index, '--card-tilt': `${(index % 5 - 2) * 0.7}deg` } as CSSProperties}
                aria-label={`${index + 1}번째 카드 선택`}
                aria-pressed={selected}
                disabled={selected || reading.selected.length === count}
                onClick={() => selectCard(id)}
              >
                <img src={IMAGES.BACK} alt="" loading="lazy" decoding="async" height="120" width="80" />
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="Button"
          disabled={reading.selected.length !== count}
          onClick={() => navigate('/tarot/result', { state: { reading } })}
        >풀이 보기</button>
        <button type="button" className="Button" onClick={() => setReading(createReading(reading.spread))}>
          새 리딩 시작
        </button>
      </Sections>
      <Footer />
    </main>
  );
};

export { TarotPage };
