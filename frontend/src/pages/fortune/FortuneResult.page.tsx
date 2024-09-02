import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ClipboardShareButton,
  Footer,
  Headers,
  KakaoShareButton,
  Sections,
  TwitterShareButton,
} from '../../components';
import { IMAGES } from '../../assets';

const FortuneResultPage = () => {
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    axios
      // .get(`http://localhost:3000/fortune/result/${id}`)
      .get(`https://chat-astrology-6c51.vercel.app/api/fortune/result/${id}`)
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
      <Headers title={'포춘쿠키 결과'} />
      <Sections>
        <article>
          <h2>오늘의 포춘쿠키 결과</h2>
          <div className={'FortuneCookie'}>
            <img src={IMAGES.FORTUNE2} alt="포춘쿠키" />
          </div>
          <p>{result}</p>
        </article>
        <article>
          <h4>결과를 공유하고싶다면?</h4>
          <div className="ShareButtons">
            <KakaoShareButton />
            <TwitterShareButton {...propsTwitterShareButton} />
            <ClipboardShareButton />
          </div>
        </article>
      </Sections>
      <Footer />
    </main>
  );
};

export { FortuneResultPage };
