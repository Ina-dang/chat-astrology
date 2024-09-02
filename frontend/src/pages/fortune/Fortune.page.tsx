import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Headers, Sections } from '../../components';
import { IMAGES } from '../../assets';

/**
 * FortunePage 컴포넌트
 * 사용자가 버튼을 클릭하여 서버에서 오늘의 운세를 받아오는 페이지를 렌더링합니다.
 */
const FortunePage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState('');
  const [animationOn, setAnimationOn] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGetFortune = () => {
    setAnimationOn((prev) => !prev);

    axios
      // .get('http://localhost:3000/fortune')
      .get('/api/fortune')
      .then((response) => {
        console.log(response);
        if (!response?.data) {
          throw new Error('axios error');
        }
        const { code, message, data } = response.data;
        if (code === 'OK') {
          setResult(data);
          setTimeout(() => {
            navigate(`/fortune/result?id=${data.id}`);
          }, 1500);
        } else {
          throw new Error(message);
        }
      })
      .catch((error) => console.error(error));
  };
  console.log(result);
  return (
    <main className="Pages FortunePage">
      <Headers title={'오늘의 포춘쿠키'} />
      <Sections>
        <div className={animationOn ? 'FortuneCookie Active' : 'FortuneCookie'}>
          <img src={IMAGES.FORTUNE1} alt="포춘쿠키" />
        </div>
        <button className="Button" onClick={handleGetFortune}>
          <p>오늘의 운세 확인하기</p>
        </button>
      </Sections>
      <Footer />
    </main>
  );
};

export { FortunePage };
