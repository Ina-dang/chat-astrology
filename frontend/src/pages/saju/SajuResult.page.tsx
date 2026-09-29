import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer, Headers, Sections, SharedButtons } from '../../components';
import { getApiEndpoint } from '../../tools';
const sajuStorageKey = 'saju.input.v1';
const interpretationStoragePrefix = 'saju.interpretation.v1';

interface SajuInput {
  calendarType: 'solar' | 'lunar';
  birth: string;
  birthTime: string;
  timeUnknown: boolean;
  leapMonth: boolean;
}

interface Pillar {
  key: string;
  label: string;
  name: string;
  hanja: string;
  stem: { name: string; hanja: string; element: string; yinYang: string };
  branch: { name: string; hanja: string; element: string };
  tenGodStem: string;
  tenGodBranches: string[];
  twelveStage: string;
}

interface SajuResult {
  calendar: {
    requestedType: 'solar' | 'lunar';
    inputDate: string;
    birthTime: string | null;
    solarDate: string;
    lunarDate: string;
    lunarLeapMonth: boolean;
  };
  dayMaster: { name: string; hanja: string; yinYang: string; element: string };
  elements: Record<'목' | '화' | '토' | '금' | '수', number>;
  pillars: Pillar[];
  engine: { name: string; version: string; basis: string };
}

interface SajuInterpretation {
  overview: string;
  strengths: string;
  balance: string;
  guidance: string;
  limitation: string;
}

function readInput(value: unknown): SajuInput | null {
  if (!value || typeof value !== 'object') return null;
  const input = value as Partial<SajuInput>;
  return ['solar', 'lunar'].includes(input.calendarType ?? '') && typeof input.birth === 'string' &&
    typeof input.birthTime === 'string' && typeof input.timeUnknown === 'boolean' && typeof input.leapMonth === 'boolean'
    ? input as SajuInput : null;
}

function readInterpretation(value: unknown): SajuInterpretation | null {
  if (!value || typeof value !== 'object') return null;
  const interpretation = value as Partial<SajuInterpretation>;
  return ['overview', 'strengths', 'balance', 'guidance', 'limitation']
    .every((key) => typeof interpretation[key as keyof SajuInterpretation] === 'string')
    ? interpretation as SajuInterpretation : null;
}

const SajuResultPage = () => {
  const location = useLocation();
  const [input] = useState(() => {
    let saved: unknown = null;
    try { saved = JSON.parse(sessionStorage.getItem(sajuStorageKey) || 'null'); } catch { /* invalid storage */ }
    return readInput(location.state?.input) ?? readInput(saved);
  });
  const [result, setResult] = useState<SajuResult | null>(null);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [interpretation, setInterpretation] = useState<SajuInterpretation | null>(null);
  const [interpretationError, setInterpretationError] = useState('');
  const [isInterpreting, setIsInterpreting] = useState(false);

  useEffect(() => {
    if (!input) return;
    const controller = new AbortController();
    setError('');
    setResult(null);
    axios.post(getApiEndpoint('saju/result'), input, { signal: controller.signal, timeout: 15000 })
      .then(({ data: response }) => {
        if (response?.code !== 'OK' || !Array.isArray(response?.data?.pillars)) {
          throw new Error(response?.message || '명식을 계산하지 못했습니다.');
        }
        if (!controller.signal.aborted) setResult(response.data);
      })
      .catch((requestError) => {
        if (!controller.signal.aborted) {
          setError(requestError?.response?.data?.message || requestError?.message || '명식을 계산하지 못했습니다.');
        }
      });
    return () => controller.abort();
  }, [input, attempt]);

  useEffect(() => {
    if (!result) return;
    const key = `${interpretationStoragePrefix}:${result.pillars.map((pillar) => pillar.hanja).join('-')}`;
    try {
      setInterpretation(readInterpretation(JSON.parse(sessionStorage.getItem(key) || 'null')));
    } catch {
      sessionStorage.removeItem(key);
    }
  }, [result]);

  const handleInterpretation = async () => {
    if (!input || !result || isInterpreting) return;
    const key = `${interpretationStoragePrefix}:${result.pillars.map((pillar) => pillar.hanja).join('-')}`;
    setIsInterpreting(true);
    setInterpretationError('');

    try {
      const { data: response } = await axios.post(
        getApiEndpoint('saju/interpretation'),
        input,
        { timeout: 30000 },
      );
      const nextInterpretation = readInterpretation(response?.data);
      if (response?.code !== 'OK' || !nextInterpretation) {
        throw new Error(response?.message || 'AI 해석을 생성하지 못했습니다.');
      }
      sessionStorage.setItem(key, JSON.stringify(nextInterpretation));
      setInterpretation(nextInterpretation);
    } catch (requestError: unknown) {
      const fallback = requestError instanceof Error ? requestError.message : 'AI 해석을 생성하지 못했습니다.';
      if (axios.isAxiosError(requestError)) {
        setInterpretationError(requestError.response?.data?.message || fallback);
      } else {
        setInterpretationError(fallback);
      }
    } finally {
      setIsInterpreting(false);
    }
  };

  const pillars = result ? [...result.pillars].reverse() : [];

  return (
    <main className="Pages SajuResultPage">
      <Headers title="사주 결과" />
      <Sections>
        {!input && <p role="alert">출생 정보가 없습니다. 먼저 정보를 입력해 주세요.</p>}
        {input && !result && !error && <p role="status">명식을 계산하고 있습니다.</p>}
        {error && (
          <div role="alert">
            <p>{error}</p>
            <button className="Button" type="button" onClick={() => setAttempt((value) => value + 1)}>다시 계산하기</button>
          </div>
        )}
        {result && (
          <>
            <h2>나의 명식</h2>
            <p>{result.calendar.solarDate} 양력 · {result.calendar.lunarDate} 음력
              {result.calendar.lunarLeapMonth ? ' 윤달' : ''}
              {result.calendar.birthTime ? ` · ${result.calendar.birthTime}` : ' · 출생시간 모름'}</p>

            <table className="PillarsTable">
              <thead><tr>{pillars.map((pillar) => <th key={pillar.key}>{pillar.label}</th>)}</tr></thead>
              <tbody>
                <tr>{pillars.map((pillar) => <td key={pillar.key}><strong>{pillar.stem.name}</strong><small>{pillar.stem.hanja} · {pillar.stem.element}</small></td>)}</tr>
                <tr>{pillars.map((pillar) => <td key={pillar.key}><strong>{pillar.branch.name}</strong><small>{pillar.branch.hanja} · {pillar.branch.element}</small></td>)}</tr>
              </tbody>
            </table>

            <section className="DayMaster">
              <h3>일간</h3>
              <p><strong>{result.dayMaster.name}({result.dayMaster.hanja})</strong> · {result.dayMaster.yinYang} · {result.dayMaster.element}</p>
            </section>

            <section>
              <h3>오행 구성</h3>
              <ul className="ElementList">
                {Object.entries(result.elements).map(([element, count]) => <li key={element}><span>{element}</span><strong>{count}</strong></li>)}
              </ul>
              <p>출생시간을 모르면 시주의 두 글자는 집계에서 제외됩니다.</p>
            </section>

            <section>
              <h3>기둥별 근거</h3>
              {pillars.map((pillar) => (
                <article key={pillar.key}>
                  <h4>{pillar.label} · {pillar.name}({pillar.hanja})</h4>
                  <p>천간 십성 {pillar.tenGodStem} · 지지 십성 {pillar.tenGodBranches.join('·')} · 12운성 {pillar.twelveStage}</p>
                </article>
              ))}
            </section>

            <section className="AiInterpretation" aria-labelledby="ai-interpretation-title">
              <h3 id="ai-interpretation-title">AI 종합 해석</h3>
              <p>계산된 명식 정보만 OpenAI에 전달합니다. 생년월일 원문은 전달하지 않습니다.</p>
              {!interpretation && (
                <button
                  className="Button"
                  type="button"
                  disabled={isInterpreting}
                  aria-busy={isInterpreting}
                  onClick={handleInterpretation}
                >
                  {isInterpreting ? '해석을 생성하고 있습니다' : 'AI 종합 해석 보기'}
                </button>
              )}
              {isInterpreting && <p role="status">명식의 흐름을 정리하고 있습니다.</p>}
              {interpretationError && <p role="alert">{interpretationError}</p>}
              {interpretation && (
                <div className="InterpretationResult">
                  <article><h4>전체 흐름</h4><p>{interpretation.overview}</p></article>
                  <article><h4>강점</h4><p>{interpretation.strengths}</p></article>
                  <article><h4>오행 균형</h4><p>{interpretation.balance}</p></article>
                  <article><h4>생활 조언</h4><p>{interpretation.guidance}</p></article>
                  <p className="InterpretationNotice">{interpretation.limitation}</p>
                </div>
              )}
            </section>

            <details>
              <summary>계산 기준</summary>
              <p>{result.engine.name} {result.engine.version} · {result.engine.basis}</p>
              <p>AI 종합 해석은 전통 명리의 상징 체계를 바탕으로 한 참고 정보이며 전문가 상담을 대신하지 않습니다.</p>
            </details>
            <SharedButtons
              title="월담 사주 요약"
              text={[
                `일간 ${result.dayMaster.name}(${result.dayMaster.hanja}) · ${result.dayMaster.yinYang} ${result.dayMaster.element}`,
                `오행 ${Object.entries(result.elements).map(([element, count]) => `${element} ${count}`).join(' · ')}`,
                interpretation ? `전체 흐름: ${interpretation.overview}` : '',
              ].filter(Boolean).join('\n')}
              url={new URL('/saju', window.location.origin).toString()}
            />
          </>
        )}
        <Link to="/saju">출생 정보 수정하기</Link>
      </Sections>
      <Footer />
    </main>
  );
};

export { SajuResultPage };
