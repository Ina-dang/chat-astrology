import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Headers, Sections } from '../../components';

const storageKey = 'saju.input.v1';

const SajuPage = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [calendarType, setCalendarType] = useState<'solar' | 'lunar'>('solar');
  const [birth, setBirth] = useState({ year: '', month: '', day: '' });
  const [birthTime, setBirthTime] = useState('');
  const [timeUnknown, setTimeUnknown] = useState(false);
  const [leapMonth, setLeapMonth] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const { year, month, day } = birth;
    if (!year || !month || !day || (!timeUnknown && !birthTime)) return;
    const input = {
      calendarType,
      birth: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
      birthTime: timeUnknown ? '' : birthTime,
      timeUnknown,
      leapMonth: calendarType === 'lunar' && leapMonth,
    };
    sessionStorage.setItem(storageKey, JSON.stringify(input));
    navigate('/saju/result', { state: { input } });
  };

  const updateBirth = (key: keyof typeof birth) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirth((previous) => ({ ...previous, [key]: event.target.value }));
  };

  return (
    <main className="Pages SajuPage">
      <Headers title="사주 정보 입력" />
      <Sections>
        <form onSubmit={submit}>
          <h2>태어난 때를 알려 주세요</h2>
          <fieldset>
            <legend>달력 기준</legend>
            <label><input type="radio" name="calendar" value="solar" checked={calendarType === 'solar'}
              onChange={() => { setCalendarType('solar'); setLeapMonth(false); }} /> 양력</label>
            <label><input type="radio" name="calendar" value="lunar" checked={calendarType === 'lunar'}
              onChange={() => setCalendarType('lunar')} /> 음력</label>
          </fieldset>

          <fieldset>
            <legend>{calendarType === 'solar' ? '양력' : '음력'} 생년월일</legend>
            <div className="BirthDateFields">
              <label>년<input aria-label="태어난 해" type="number" min="1900" max={currentYear}
                value={birth.year} onChange={updateBirth('year')} required /></label>
              <label>월<input aria-label="태어난 달" type="number" min="1" max="12"
                value={birth.month} onChange={updateBirth('month')} required /></label>
              <label>일<input aria-label="태어난 날" type="number" min="1" max="31"
                value={birth.day} onChange={updateBirth('day')} required /></label>
            </div>
            {calendarType === 'lunar' && (
              <label><input type="checkbox" checked={leapMonth} onChange={(event) => setLeapMonth(event.target.checked)} /> 윤달</label>
            )}
          </fieldset>

          <label className="TimeField">
            출생시간
            <input type="time" value={birthTime} onChange={(event) => setBirthTime(event.target.value)}
              disabled={timeUnknown} required={!timeUnknown} />
          </label>
          <label><input type="checkbox" checked={timeUnknown}
            onChange={(event) => setTimeUnknown(event.target.checked)} /> 출생시간을 모릅니다</label>

          <p className="FormGuide">대한민국 표준시 기준으로 계산하며, 진태양시 보정은 적용하지 않습니다.</p>
          <button className="Button" type="submit">명식 계산하기</button>
        </form>
      </Sections>
      <Footer />
    </main>
  );
};

export { SajuPage };
