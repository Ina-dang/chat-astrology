import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ClipboardShareButton,
  KakaoShareButton,
  Sections,
  TwitterShareButton,
} from '../../components';

const FortuneResultPage = () => {
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/fortune/result/${id}`)
      .then((response) => {
        console.log(response);
        if (!response?.data) {
          throw new Error('axios error');
        }
        const { code, message, data } = response.data;
        if (code === 'OK') {
          setResult(data.message ?? ' ');
        } else {
          throw new Error(message);
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  const propsTwitterShareButton = {
    url: location.href,
    text: 'GPT가 말아주는 사주🍶&타로🍺',
  };
  return (
    <main className="Pages FortuneResultPage">
      <header>
        <h2>결과</h2>
        <p>{result}</p>
      </header>
      <Sections>
        <article>
          <h4>결과를 공유하고싶다면?</h4>
          <KakaoShareButton />
          <TwitterShareButton {...propsTwitterShareButton} />
          <ClipboardShareButton />
        </article>
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

export { FortuneResultPage };
