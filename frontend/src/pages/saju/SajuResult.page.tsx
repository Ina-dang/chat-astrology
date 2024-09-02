import { useEffect, useState } from 'react';
import { Headers, Sections } from '../../components';
import axios from 'axios';

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
    const values = {
      name,
      birth,
      birthTime,
    };
    axios
      // .post('http://localhost:3000/saju/result', values)
      .post('/api/saju/result', values)
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
      .catch((error) => console.error(error));
  }, [birth]);

  return (
    <main className="Pages SajuResultPage">
      <Headers title={'사주 결과'} />
      <Sections>
        {result && (
          <section>
            <h2>나의 오행</h2>
            <article>
              <p>{result?.yinYang}</p>
              <p>{result?.fiveElements}</p>
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
          </section>
        )}
      </Sections>
    </main>
  );
};
export { SajuResultPage };
