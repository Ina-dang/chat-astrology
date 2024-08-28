import axios from 'axios';
import { useEffect, useState } from 'react';
import { KakaoShareButton } from '../../components';

const FortuneResultPage = () => {
  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  const [result, setResult] = useState('');

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

  return (
    <div>
      결과
      <p>{result}</p>
      결과를 공유하고싶다면?
      <KakaoShareButton />
      <button>공유하기</button>
    </div>
  );
};

export { FortuneResultPage };
