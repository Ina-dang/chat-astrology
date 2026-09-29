import axios from 'axios';
import { useEffect, useState } from 'react';
import { Footer, Headers, Sections, SharedButtons } from '../../components';
import { IMAGES } from '../../assets';
import { getApiEndpoint } from '../../tools';

const FortuneResultPage = () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const isValidId = Boolean(id && /^\d+$/.test(id));
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState(
    isValidId ? '' : '유효하지 않은 포춘쿠키 링크입니다.',
  );

  useEffect(() => {
    if (!isValidId) return;

    axios
      .get(getApiEndpoint(`fortune/result/${id}`))
      .then((response) => {
        if (!response?.data) throw new Error('포춘쿠키 결과를 불러오지 못했습니다.');

        const { code, message, data } = response.data;
        if (code !== 'OK' || !data?.message) throw new Error(message);
        setResult(data.message);
      })
      .catch(() => setError('포춘쿠키 결과를 찾을 수 없습니다.'));
  }, [id, isValidId]);

  return (
    <main className="Pages FortuneResultPage">
      <Headers title={'포춘쿠키 결과'} />
      <Sections>
        <article>
          <h2>오늘의 포춘쿠키 결과</h2>
          <div className={'FortuneCookie'}>
            <img src={IMAGES.FORTUNE2} alt="포춘쿠키" />
          </div>
          {!result && !error && <p role="status">포춘쿠키 결과를 불러오고 있습니다.</p>}
          {error ? <p role="alert">{error}</p> : <p>{result}</p>}
        </article>
        {result && <SharedButtons text={`오늘의 포춘쿠키: ${result}`} />}
      </Sections>
      <Footer />
    </main>
  );
};

export { FortuneResultPage };
