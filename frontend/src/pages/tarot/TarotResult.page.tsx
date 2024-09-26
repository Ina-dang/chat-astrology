import { useEffect, useState } from 'react';
import { Footer, Headers, Sections } from '../../components';
import axios from 'axios';
import { getApiEndpoint } from '../../tools';
import { useSearchParams } from 'react-router-dom';
import { IMAGES } from '../../assets';
import { ExtendedCSSProperties } from './types';

interface TarotCardSelection {
  past: string | null;
  present: string | null;
  future: string | null;
}

interface TarotCardDetail {
  result: string;
  ko: string;
  origin: string;
}

interface TarotRespone {
  past: TarotCardDetail;
  present: TarotCardDetail;
  future: TarotCardDetail;
}

const TarotResultPage = () => {
  const [searchParams] = useSearchParams();
  const past = searchParams.get('past');
  const present = searchParams.get('present');
  const future = searchParams.get('future');
  const [tarots, setTarots] = useState<TarotRespone | null>(null);

  const sendResult = async (cards: TarotCardSelection): Promise<void> => {
    axios
      .post(getApiEndpoint('tarot/result'), cards)
      .then((result) => {
        console.log('결과 전송 성공:', result);
        const { code, message, data } = result.data;
        if (code === 'OK') {
          setTarots(data);
        } else {
          throw new Error(message);
        }
      })
      .catch((error) => {
        console.error('타로 결과 전송 중 오류 발생:', error);
      })
      .finally(() => {
        console.log('결과 전송 시도 완료');
      });
  };

  useEffect(() => {
    if (past && present && future) {
      sendResult({ past, present, future });
    }
  }, [past, present, future]);

  return (
    <main className="Pages TarotResultPage">
      <Headers title={'타로카드 결과'} />
      <Sections>
        {tarots ? (
          <div className="PastWrap">
            <div className="divider">
              <span>과거</span>
            </div>
            <p>
              타로 카드에서 "과거"는 질문자가 과거에 겪었던 경험이나 사건을 나타내며, 현재 상황에
              대한 배경을 제공합니다. 이는 과거의 사건이 현재의 감정이나 갈등에 미친 영향을
              설명하고, 경험에서 얻은 교훈이나 성장을 강조합니다. 또한, 과거의 선택이 현재 문제
              해결에 어떤 역할을 했는지를 보여줍니다.
            </p>
            <h2>{`${tarots.past.origin}(${tarots.past.ko})`}</h2>
            <div>
              <div
                style={{ '--card-src': `url(${IMAGES[past ?? '']})` } as ExtendedCSSProperties}
              ></div>
            </div>
            <p>{tarots.past.result}</p>
          </div>
        ) : null}
      </Sections>
      <Footer />
    </main>
  );
};

export { TarotResultPage };
