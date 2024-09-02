import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headers, InputField, Sections } from '../../components';
import { IMAGES } from '../../assets';

interface FormValues {
  name: string;
  birth: string;
  gender: string;
  birthTime: string;
}

const inputConfigs = [
  { id: 'name', label: '이름', type: 'text' as const },
  {
    id: 'birth',
    label: '생년월일',
    type: 'date' as const,
    pattern: '[0-9]*',
    inputMode: 'numeric' as const,
  },
  {
    id: 'birthTime',
    label: '출생시간',
    type: 'time' as const,
    pattern: '[0-9]*',
    inputMode: 'numeric' as const,
  },
];

const SajuPage: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    gender: '',
    birth: '',
    birthTime: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleGetTaro = () => {
    const { name, birth, birthTime } = values;
    if (!name || !birth || !birthTime) {
      console.warn('모든 필드를 채워주세요.');
      alert('모든 필드를 채워주세요.');
      return;
    }

    const queryString = `name=${encodeURIComponent(name)}&birth=${encodeURIComponent(
      birth,
    )}&birthTime=${encodeURIComponent(birthTime)}`;
    navigate(`/saju/result?${queryString}`);
  };

  return (
    <main className="Pages SajuPage">
      <Headers title={'사주 정보 입력'} />
      <Sections>
        <form>
          <h3>사주 정보를 입력해주세요.</h3>
          {inputConfigs.map(({ id, label, type, pattern, inputMode }) => (
            <InputField
              key={id}
              id={id}
              label={label}
              type={type}
              pattern={pattern}
              inputMode={inputMode}
              onChange={handleChange}
            />
          ))}
        </form>
        <button className="Button" type="button" onClick={handleGetTaro}>
          <p>결과보기</p>
        </button>
      </Sections>
      <footer></footer>
    </main>
  );
};

export { SajuPage };
