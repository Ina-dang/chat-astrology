import { fortuneDatas } from './_datas.js';
import { createRequire } from 'node:module';
import { Lunar, Solar } from 'lunar-typescript';

const tarotCards = createRequire(import.meta.url)('../src/data/tarot-cards.json');

const stems = {
  甲: ['갑', '목', '양'], 乙: ['을', '목', '음'], 丙: ['병', '화', '양'], 丁: ['정', '화', '음'],
  戊: ['무', '토', '양'], 己: ['기', '토', '음'], 庚: ['경', '금', '양'], 辛: ['신', '금', '음'],
  壬: ['임', '수', '양'], 癸: ['계', '수', '음'],
};
const branches = {
  子: ['자', '수'], 丑: ['축', '토'], 寅: ['인', '목'], 卯: ['묘', '목'], 辰: ['진', '토'], 巳: ['사', '화'],
  午: ['오', '화'], 未: ['미', '토'], 申: ['신', '금'], 酉: ['유', '금'], 戌: ['술', '토'], 亥: ['해', '수'],
};
const tenGods = {
  正财: '정재', 偏财: '편재', 正官: '정관', 七杀: '편관', 正印: '정인', 偏印: '편인',
  劫财: '겁재', 比肩: '비견', 伤官: '상관', 食神: '식신', 日主: '일간',
};
const twelveStages = {
  长生: '장생', 沐浴: '목욕', 冠带: '관대', 临官: '건록', 帝旺: '제왕', 衰: '쇠',
  病: '병', 死: '사', 墓: '묘', 绝: '절', 胎: '태', 养: '양',
};
const elementNames = { 木: '목', 火: '화', 土: '토', 金: '금', 水: '수' };
const sajuKeys = new Set(['calendarType', 'birth', 'birthTime', 'timeUnknown', 'leapMonth']);

function pad(value) {
  return String(value).padStart(2, '0');
}

function formatDate(year, month, day) {
  return `${year}-${pad(month)}-${pad(day)}`;
}

function translate(value, dictionary) {
  return dictionary[value] || value;
}

function createPillar(key, label, hanja, wuXing, stemTenGod, branchTenGods, twelveStage) {
  const stem = stems[hanja[0]];
  const branch = branches[hanja[1]];
  return {
    key,
    label,
    name: `${stem[0]}${branch[0]}`,
    hanja,
    stem: { name: stem[0], hanja: hanja[0], element: stem[1], yinYang: stem[2] },
    branch: { name: branch[0], hanja: hanja[1], element: branch[1] },
    tenGodStem: translate(stemTenGod, tenGods),
    tenGodBranches: branchTenGods.map((value) => translate(value, tenGods)),
    twelveStage: translate(twelveStage, twelveStages),
    elements: [...wuXing].map((value) => translate(value, elementNames)),
  };
}

function calculateSaju({ calendarType, birth, birthTime, timeUnknown, leapMonth = false }) {
  const dateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(birth);
  if (!dateMatch) throw new Error('INVALID_BIRTH');
  const [, yearText, monthText, dayText] = dateMatch;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  if (year < 1900 || year > 2099 || month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error('INVALID_BIRTH');
  }

  let hour = 12;
  let minute = 0;
  if (!timeUnknown) {
    const timeMatch = /^(\d{2}):(\d{2})$/.exec(birthTime);
    if (!timeMatch || Number(timeMatch[1]) > 23 || Number(timeMatch[2]) > 59) {
      throw new Error('INVALID_TIME');
    }
    hour = Number(timeMatch[1]);
    minute = Number(timeMatch[2]);
  }

  let lunar;
  let solar;
  if (calendarType === 'lunar') {
    lunar = Lunar.fromYmdHms(year, leapMonth ? -month : month, day, hour, minute, 0);
    solar = lunar.getSolar();
  } else {
    const testDate = new Date(Date.UTC(year, month - 1, day));
    if (testDate.getUTCFullYear() !== year || testDate.getUTCMonth() !== month - 1 || testDate.getUTCDate() !== day) {
      throw new Error('INVALID_BIRTH');
    }
    solar = Solar.fromYmdHms(year, month, day, hour, minute, 0);
    lunar = solar.getLunar();
  }

  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(new Date());
  if (solar.toYmd() > today) throw new Error('FUTURE_BIRTH');

  const eight = lunar.getEightChar();
  const pillars = [
    createPillar('year', '년주', eight.getYear(), eight.getYearWuXing(), eight.getYearShiShenGan(), eight.getYearShiShenZhi(), eight.getYearDiShi()),
    createPillar('month', '월주', eight.getMonth(), eight.getMonthWuXing(), eight.getMonthShiShenGan(), eight.getMonthShiShenZhi(), eight.getMonthDiShi()),
    createPillar('day', '일주', eight.getDay(), eight.getDayWuXing(), eight.getDayShiShenGan(), eight.getDayShiShenZhi(), eight.getDayDiShi()),
  ];
  if (!timeUnknown) {
    pillars.push(createPillar('time', '시주', eight.getTime(), eight.getTimeWuXing(), eight.getTimeShiShenGan(), eight.getTimeShiShenZhi(), eight.getTimeDiShi()));
  }

  const elements = { 목: 0, 화: 0, 토: 0, 금: 0, 수: 0 };
  pillars.flatMap((pillar) => pillar.elements).forEach((element) => elements[element]++);
  const dayStem = stems[eight.getDayGan()];

  return {
    calendar: {
      requestedType: calendarType,
      inputDate: birth,
      birthTime: timeUnknown ? null : birthTime,
      solarDate: solar.toYmd(),
      lunarDate: formatDate(lunar.getYear(), Math.abs(lunar.getMonth()), lunar.getDay()),
      lunarLeapMonth: lunar.getMonth() < 0,
    },
    dayMaster: { name: dayStem[0], hanja: eight.getDayGan(), yinYang: dayStem[2], element: dayStem[1] },
    elements,
    pillars,
    engine: {
      name: 'lunar-typescript',
      version: '1.8.6',
      basis: '절기 기준 연·월주, 대한민국 표준시 입력, 진태양시 미보정',
    },
  };
}

async function handleSajuRequest(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ code: 'ERROR', message: 'POST 요청만 가능합니다.' });
  }
  const body = req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body) ||
      Object.keys(body).some((key) => !sajuKeys.has(key)) ||
      !['solar', 'lunar'].includes(body.calendarType) || typeof body.birth !== 'string' ||
      typeof body.timeUnknown !== 'boolean' ||
      (!body.timeUnknown && typeof body.birthTime !== 'string') ||
      (body.leapMonth !== undefined && typeof body.leapMonth !== 'boolean') ||
      (body.calendarType === 'solar' && body.leapMonth === true)) {
    return res.status(400).json({ code: 'ERROR', message: '출생 정보를 확인해 주세요.' });
  }

  try {
    return res.json({ code: 'OK', message: '사주 명식을 계산했습니다.', data: calculateSaju(body) });
  } catch {
    return res.status(400).json({ code: 'ERROR', message: '지원하지 않거나 올바르지 않은 출생 정보입니다.' });
  }
}

async function handleTarotRequest(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ code: 'ERROR', message: 'POST 요청만 가능합니다.' });
  }

  const body = req.body;
  const positionsBySpread = { one: ['focus'], three: ['past', 'present', 'future'] };
  const positions = positionsBySpread[body?.spread];
  if (
    !body || typeof body !== 'object' || Array.isArray(body) ||
    Object.keys(body).length !== 2 || !positions || !Array.isArray(body.cards) ||
    body.cards.length !== positions.length ||
    !body.cards.every((card) => card && typeof card === 'object' &&
      typeof card.id === 'string' && Object.hasOwn(tarotCards, card.id) &&
      (card.orientation === 'upright' || card.orientation === 'reversed')) ||
    new Set(body.cards.map((card) => card.id)).size !== positions.length
  ) {
    return res.status(400).json({ code: 'ERROR', message: '리딩 방식에 맞는 서로 다른 카드를 선택해 주세요.' });
  }

  const messages = {
    focus: (keywords) => `${keywords}에 주목해 지금 가장 먼저 살펴볼 지점으로 읽어 보세요.`,
    past: (keywords) => `${keywords}이 현재 상황에 이어진 과거의 배경으로 읽힙니다.`,
    present: (keywords) => `${keywords}이 지금 확인해야 할 핵심 흐름으로 읽힙니다.`,
    future: (keywords) => `${keywords}을 확정된 예언보다 앞으로 점검할 흐름으로 읽어 보세요.`,
  };
  const data = body.cards.map(({ id, orientation }, index) => {
    const card = tarotCards[id];
    const position = positions[index];
    const keywords = card[orientation];
    return {
      id,
      orientation,
      position,
      name: card.name,
      nameEn: card.nameEn,
      keywords,
      interpretation: messages[position](keywords.join(' · ')),
    };
  });

  return res.json({
    code: 'OK',
    message: '타로카드 분석에 성공하였습니다',
    data: {
      spread: body.spread,
      cards: data,
      source: {
        deck: 'Rider-Waite-Smith 78 cards',
        keywords: 'Fortune Platform (MIT)',
        images: 'sixseeds/tarot-api (public-domain RWS images)',
      },
    },
  });
}

async function handleFortuneRequest(res) {
  const data = getRandomData(fortuneDatas);
  res.json({
    code: 'OK',
    message: '오늘의 포춘쿠키 조회에 성공하였습니다',
    data,
  });
}

async function handleGetFortuneRequest(id, res) {
  const parsedId = Number(id);
  const data = Number.isInteger(parsedId)
    ? fortuneDatas.find((item) => item.id === parsedId)
    : undefined;

  if (!data) {
    return res.status(404).json({
      code: 'NOT_FOUND',
      message: '포춘쿠키 결과를 찾을 수 없습니다.',
    });
  }

  res.json({
    code: 'OK',
    message: '오늘의 포춘쿠키 조회에 성공하였습니다',
    data,
  });
}

function getRandomData(datas) {
  const randomIndex = Math.floor(Math.random() * datas.length);
  return datas[randomIndex];
}
export { calculateSaju, handleSajuRequest, handleFortuneRequest, handleGetFortuneRequest, handleTarotRequest };
