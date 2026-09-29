import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer, Headers, Sections, SharedButtons } from '../../components';
import { IMAGES } from '../../assets';
import { getApiEndpoint } from '../../tools';
import {
  cards,
  CardId,
  isReading,
  Orientation,
  positionNames,
  readReading,
  Reading,
  spreadPositions,
} from './tarot';

interface ResultCard {
  id: CardId;
  interpretation: string;
  keywords: string[];
  name: string;
  nameEn: string;
  orientation: Orientation;
  position: keyof typeof positionNames;
}

interface Result {
  cards: ResultCard[];
  source: { deck: string; images: string; keywords: string };
  spread: Reading['spread'];
}

const TarotResultPage = () => {
  const location = useLocation();
  const [reading] = useState<Reading | null>(() => {
    const value = location.state?.reading ?? readReading();
    return isReading(value) && value.selected.length === spreadPositions[value.spread].length ? value : null;
  });
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!reading) return;
    const controller = new AbortController();
    setError(false);
    setResult(null);

    axios.post(
      getApiEndpoint('tarot/result'),
      { spread: reading.spread, cards: reading.selected },
      { signal: controller.signal, timeout: 15000 },
    )
      .then(({ data: response }) => {
        const data = response?.data as Result | undefined;
        if (response?.code !== 'OK' || data?.spread !== reading.spread ||
            data.cards?.length !== reading.selected.length ||
            !data.cards.every((card, index) =>
              card.id === reading.selected[index].id &&
              card.orientation === reading.selected[index].orientation &&
              typeof card.interpretation === 'string' && card.interpretation.trim())) {
          throw new Error('Invalid tarot response');
        }
        if (!controller.signal.aborted) setResult(data);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      });

    return () => controller.abort();
  }, [reading, attempt]);

  return (
    <main className="Pages TarotResultPage">
      <Headers title="타로 풀이" />
      <Sections>
        <h2>선택한 카드의 이야기</h2>
        {!reading ? (
          <p role="alert">선택한 카드가 없습니다. 먼저 리딩 방식을 고르고 카드를 선택해 주세요.</p>
        ) : (
          <>
            <div className={`TarotSlots is-${reading.spread}`}>
              {reading.selected.map((selected, index) => {
                const position = spreadPositions[reading.spread][index];
                return (
                  <figure key={selected.id}>
                    <figcaption>{positionNames[position]}</figcaption>
                    <img
                      className={selected.orientation === 'reversed' ? 'is-reversed' : undefined}
                      src={IMAGES[selected.id] ?? cards[selected.id].image}
                      alt={`${cards[selected.id].name} ${selected.orientation === 'upright' ? '정방향' : '역방향'}`}
                    />
                    <p>{cards[selected.id].name} · {selected.orientation === 'upright' ? '정방향' : '역방향'}</p>
                  </figure>
                );
              })}
            </div>
            {!result && !error && <p role="status">선택한 카드의 풀이를 불러오고 있습니다.</p>}
            {error && (
              <div role="alert">
                <p>풀이를 불러오지 못했습니다. 선택한 카드와 방향은 그대로 유지됩니다.</p>
                <button type="button" className="Button" onClick={() => setAttempt((value) => value + 1)}>
                  같은 카드로 다시 시도
                </button>
              </div>
            )}
            {result?.cards.map((card) => (
              <article key={card.position}>
                <h3>{positionNames[card.position]} · {card.name}</h3>
                <p className="Keywords">{card.keywords.join(' · ')}</p>
                <p>{card.interpretation}</p>
              </article>
            ))}
            {result && (
              <>
                <details>
                  <summary>카드 데이터 출처</summary>
                  <p>{result.source.deck}</p>
                  <p>키워드: {result.source.keywords}</p>
                  <p>이미지: {result.source.images}</p>
                </details>
                <SharedButtons
                  title="월담 타로 리딩"
                  text={result.cards.map((card) => (
                    `${positionNames[card.position]}: ${card.name} · ${card.orientation === 'upright' ? '정방향' : '역방향'}\n${card.interpretation}`
                  )).join('\n\n')}
                  url={new URL('/tarot', window.location.origin).toString()}
                />
              </>
            )}
            <p>타로 해석은 자기 성찰을 위한 참고이며 의료·법률·재정 판단을 대신하지 않습니다.</p>
          </>
        )}
        <Link to="/tarot">카드 선택으로 돌아가기</Link>
      </Sections>
      <Footer />
    </main>
  );
};

export { TarotResultPage };
