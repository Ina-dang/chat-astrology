import axios from 'axios';
import { useState } from 'react';
import { Sections } from '../components';
interface SajuItem {
  key: string;
  value: {
    title: string;
    pre: {
      first: { title: string; type: string };
      second: { title: string; type: string };
    };
    description: string;
  };
}
interface SajuAnalysis {
  yinYang: string;
  fiveElements: string;
  sajuAnalysis: SajuItem[];
}

const SajuPage: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    birth: '',
    birthTime: '',
  });
  const [result, setResult] = useState<SajuAnalysis | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleGetTaro = () => {
    const { name, birth, birthTime } = values;
    if (!name || !birth || !birthTime) {
      console.warn('모든 필드를 채워주세요.');
      alert('모든 필드를 채워주세요.');
      return;
    }

    console.log(values);
    axios
      .post('http://localhost:3000/saju', values)
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

    //  transition효과로 생년월일은 줄어들고 결과 화면이 표시된다
  };
  console.log(result);
  return (
    <main className="Pages SajuPage">
      <h2>사주페이지</h2>
      <header>
        <form>
          <label htmlFor="name">
            <span>이름</span>
          </label>
          <input onChange={handleChange} id="name" />
          <label htmlFor="birth">
            <span>생년월일</span>
          </label>
          <input
            type="date"
            onChange={handleChange}
            pattern="[0-9]"
            inputMode="numeric"
            id="birth"
          />
          <label htmlFor="birthTime">
            <span>출생시간</span>
          </label>
          <input
            type="time"
            onChange={handleChange}
            pattern="[0-9]"
            inputMode="numeric"
            id="birthTime"
          />
          <button type="button" onClick={handleGetTaro}>
            결과보기
          </button>
        </form>
      </header>
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
      <footer>
        <button
          type="button"
          onClick={() => {
            window.history.back();
          }}
        >
          돌아가기
        </button>
      </footer>
    </main>
  );
};

export { SajuPage };
