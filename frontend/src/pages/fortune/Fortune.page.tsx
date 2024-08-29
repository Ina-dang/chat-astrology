import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * FortunePage 컴포넌트
 * 사용자가 버튼을 클릭하여 서버에서 오늘의 운세를 받아오는 페이지를 렌더링합니다.
 */
const FortunePage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState('');
  const handleGetFortune = () => {
    axios
      .get('http://localhost:3000/fortune')
      .then((response) => {
        console.log(response);
        if (!response?.data) {
          throw new Error('axios error');
        }
        const { code, message, data } = response.data;
        if (code === 'OK') {
          setResult(data);
          navigate(`/fortune/result?id=${data.id}`);
        } else {
          throw new Error(message);
        }
      })
      .catch((error) => console.error(error));
  };
  console.log(result);
  return (
    <div>
      포춘쿠키
      <button onClick={handleGetFortune}>오늘의 운세 확인하기</button>
      <p>{result}</p>
    </div>
  );
};

export { FortunePage };