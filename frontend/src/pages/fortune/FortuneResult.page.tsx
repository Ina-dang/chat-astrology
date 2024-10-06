import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ClipboardShareButton,
  Footer,
  Headers,
  KakaoShareButton,
  Sections,
  SharedButtons,
  TwitterShareButton,
} from '../../components';
import { IMAGES } from '../../assets';
import { getApiEndpoint } from '../../tools';

const FortuneResultPage = () => {
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    axios
      .get(getApiEndpoint(`fortune/result/${id}`))
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

  return (
    <main className="Pages FortuneResultPage">
      <Headers title={'포춘쿠키 결과'} />
      <Sections>
        <article>
          <h2>오늘의 포춘쿠키 결과</h2>
          <div className={'FortuneCookie'}>
            <img src={IMAGES.FORTUNE2} alt="포춘쿠키" />
          </div>
          <p>{result}</p>
        </article>
        <SharedButtons />
      </Sections>
      <Footer />
    </main>
  );
};

export { FortuneResultPage };
