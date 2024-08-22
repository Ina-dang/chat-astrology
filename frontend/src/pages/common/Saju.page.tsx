import axios from 'axios';
import { useState } from 'react';

const SajuPage: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    birth: '',
    birthTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleGetTaro = () => {
    console.log(values);
    axios.post('http://localhost:3000/saju', values).then((data) => console.log(data));

    //  transition효과로 생년월일은 줄어들고 결과 화면이 표시된다
  };

  return (
    <main>
      사주페이지
      <section>
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
      </section>
    </main>
  );
};

export { SajuPage };
