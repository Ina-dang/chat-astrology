import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ClipboardShareButton,
  Headers,
  KakaoShareButton,
  Sections,
  SharedButtons,
  TwitterShareButton,
} from '../../components';
import { getApiEndpoint, offProcess, onProcess } from '../../tools';

interface SajuAnalysisItem {
  key: string;
  value: {
    pre: {
      first: { title: string; type: string };
      second: { title: string; type: string };
    };
    description: string;
  };
}

interface SajuResult {
  yinYang: string;
  fiveElements: string;
  sajuAnalysis: SajuAnalysisItem[];
}

// 오행별 스타일 매핑 객체
const elementStyles = {
  water: { '--bg-color': '#556B2F', '--color': '#E9D5C0' }, // 물: 딥 모스 그린 배경, 라이트 베이지 글씨
  fire: { '--bg-color': '#A64B2A', '--color': '#F9E2D2' }, // 불: 딥 오렌지 배경, 아이보리 글씨
  earth: { '--bg-color': '#8B4513', '--color': '#E4C580' }, // 흙: 다크 브라운 배경, 라이트 골드 글씨
  wood: { '--bg-color': '#3B5323', '--color': '#FAEBD7' }, // 나무: 포레스트 그린 배경, 크림색 글씨
  metal: { '--bg-color': '#4B4B4B', '--color': '#C0C0C0' }, // 쇠: 다크 그레이 배경, 라이트 실버 글씨
};

const yinYangStyles = {
  yin: { '--bg-color': '#1E3D59', '--color': '#F4E3D7' }, // 음: 다크 블루 배경, 아이보리 글씨
  yang: { '--bg-color': '#D4A017', '--color': '#5A3A31' }, // 양: 딥 골드 배경, 다크 브라운 글씨
};

const getElementStyle = (type: string) => {
  console.log(type);
  switch (type) {
    case '수: 水':
    case '수':
      return elementStyles.water;
    case '화: 火':
      return elementStyles.fire;
    case '토: 土':
      return elementStyles.earth;
    case '목: 木':
      return elementStyles.wood;
    case '금: 金':
      return elementStyles.metal;
    case '음':
      return yinYangStyles.yin;
    case '양':
      return yinYangStyles.yang;
    default:
      return {};
  }
};

const SajuResultPage = () => {
  const query = new URLSearchParams(location.search);
  const name = query.get('name');
  const birth = query.get('birth');
  const birthTime = query.get('birthTime');
  const [result, setResult] = useState<SajuResult>();

  useEffect(() => {
    onProcess();
    const values = {
      name,
      birth,
      birthTime,
    };
    axios
      .post(getApiEndpoint('saju/result'), values)
      .then((response) => {
        console.log(response);
        if (!response?.data) {
          throw new Error('axios error');
        }
        const { code, message, data } = response.data;
        if (code === 'OK') {
          const orderData = [
            { key: 'time', value: data.sajuAnalysis.time },
            { key: 'day', value: data.sajuAnalysis.day },
            { key: 'month', value: data.sajuAnalysis.month },
            { key: 'year', value: data.sajuAnalysis.year },
          ];
          setResult({ ...data, sajuAnalysis: orderData });
        } else {
          throw new Error(message);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        offProcess();
      });
  }, [birth]);

  return (
    <main className="Pages SajuResultPage">
      <Headers title={'사주 결과'} />
      <Sections>
        {result && (
          <>
            <h2>나의 음양오행</h2>
            <p>
              음양오행은 음과 양, 그리고 다섯 가지의 원소(물, 불, 흙, 나무, 쇠)로 구성된 동양 철학의
              기본 원리입니다. 내 사주에 포함된 8개의 오행은 각각 물, 불, 흙, 나무, 쇠를 나타내며,
              이들 원소는 서로 상생(서로 돕는 관계)과 상극(서로 상반되는 관계)으로 상호작용하여 삶의
              에너지를 형성합니다.
            </p>
            <article>
              <p style={getElementStyle(result.yinYang)}> {result?.yinYang}</p>
              <p style={getElementStyle(result.fiveElements)}>{result?.fiveElements}</p>
            </article>
            <table>
              <thead>
                <tr>
                  <th>사주</th>
                  <th>일주</th>
                  <th>월주</th>
                  <th>년주</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {result?.sajuAnalysis?.map((item) => (
                    <td key={item.key}>
                      <div style={getElementStyle(item.value.pre.first.type)}>
                        <p>{item.value.pre.first.title}</p>
                        <small>{item.value.pre.first.type}</small>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  {result?.sajuAnalysis?.map((item) => (
                    <td key={item.key}>
                      <div style={getElementStyle(item.value.pre.second.type)}>
                        <p> {item.value.pre.second.title}</p>
                        <small>{item.value.pre.second.type}</small>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <article>
              {result?.sajuAnalysis?.map((item) => (
                <p style={getElementStyle(item.value.pre.first.type)} key={item.key}>
                  {item.value.description}
                </p>
              ))}
            </article>
            <SharedButtons />
          </>
        )}
      </Sections>
    </main>
  );
};
export { SajuResultPage };
