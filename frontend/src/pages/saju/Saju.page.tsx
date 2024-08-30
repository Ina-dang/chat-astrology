import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sections } from '../../components';

const SajuPage: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    birth: '',
    birthTime: '',
  });
  const navigate = useNavigate();

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
    const queryString = `name=${name}&birth=${birth}&birthTime=${birthTime}`;
    navigate(encodeURI(`/saju/result?${queryString}`));

    //  transition효과로 생년월일은 줄어들고 결과 화면이 표시된다(고민)
  };
  return (
    <main className="Pages SajuPage">
      <header>사주페이지</header>
      <Sections>
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
