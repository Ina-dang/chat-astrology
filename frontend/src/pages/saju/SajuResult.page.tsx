import axios from 'axios';
import { useEffect, useState } from 'react';
import { Headers, Sections } from '../../components';
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
              <p>{result?.yinYang}</p>
              <p>{result?.fiveElements}</p>
            </article>
            <hr />
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
                      <p>{item.value.pre.first.title}</p>
                      <em>{item.value.pre.first.type}</em>
                    </td>
                  ))}
                </tr>
                <tr>
                  {result?.sajuAnalysis?.map((item) => (
                    <td key={item.key}>
                      <p> {item.value.pre.second.title}</p>
                      <em>{item.value.pre.second.type}</em>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <article>
              {result?.sajuAnalysis?.map((item) => (
                <p key={item.key}>{item.value.description}</p>
              ))}
            </article>
          </>
        )}
      </Sections>
    </main>
  );
};
export { SajuResultPage };
