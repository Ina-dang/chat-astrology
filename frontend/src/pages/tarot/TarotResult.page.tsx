import React, { useEffect, useState } from 'react';
import { Footer, Headers, Sections, SharedButtons } from '../../components';
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

  // TODO 결과 뜨는 효과 자연스럽게
  useEffect(() => {
    if (past && present && future) {
      sendResult({ past, present, future });
      console.log(IMAGES[past ?? '']);
    }
  }, [past, present, future]);

  const tarotResultItemProps = [
    {
      classes: 'Past',
      item: {
        title: '과거',
        subTitle:
          '타로 카드에서 "과거"는 질문자가 과거에 겪었던 경험이나 사건을 나타내며, 현재 상황에 대한 배경을 제공합니다.',
        origin: tarots?.past.origin ?? '',
        ko: tarots?.past.ko ?? '',
        img: past ?? undefined,
        result: tarots?.past.result ?? '',
      },
    },
    {
      classes: 'Present',
      item: {
        title: '현재',
        subTitle:
          '타로 카드에서 "현재"는 질문자가 현재 겪고 있는 상황을 나타내며, 현재의 감정이나 행동이 미래에 미치는 영향을 설명합니다.',
        origin: tarots?.present.origin ?? '',
        ko: tarots?.present.ko ?? '',
        img: present ?? undefined,
        result: tarots?.present.result ?? '',
      },
    },
    {
      classes: 'Future',
      item: {
        title: '미래',
        subTitle:
          '타로 카드에서 "미래"는 질문자가 앞으로 경험하게 될 가능성을 나타내며, 현재 행동이 미래에 미치는 영향을 설명합니다.',
        origin: tarots?.future.origin ?? '',
        ko: tarots?.future.ko ?? '',
        img: future ?? undefined,
        result: tarots?.future.result ?? '',
      },
    },
  ];

  return (
    <main className="Pages TarotResultPage">
      <Headers title={'타로카드 결과'} />
      <Sections>
        {tarots
          ? tarotResultItemProps.map((props, index) => <TarotResultItem key={index} {...props} />)
          : null}
        <SharedButtons />
      </Sections>
      <Footer />
    </main>
  );
};

export { TarotResultPage };

interface TarotItem {
  title: string;
  subTitle: string;
  origin: string;
  ko: string;
  img?: string;
  result: string;
}
interface TarotResult {
  classes: string;
  item: TarotItem;
}

const TarotResultItem: React.FC<TarotResult> = ({ classes, item }) => {
  return (
    <div className={`ResultWrap ${classes}`}>
      <div className="Divider">
        <span>{item.title}</span>
      </div>
      <p>{item.subTitle}</p>
      <h2>{`${item.origin} (${item.ko})`}</h2>
      <div
        className="Images"
        style={{ '--card-src': `url(${IMAGES[item.img ?? '']})` } as ExtendedCSSProperties}
      ></div>
      <p>{item.result}</p>
    </div>
  );
};
