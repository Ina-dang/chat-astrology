import { sajuDetails, fortuneDatas, timeRanges, tarotDetails } from './_datas.js';

function getTimeRange(hour) {
  for (const [key, [start, end]] of Object.entries(timeRanges)) {
    if (hour >= start && hour < end) {
      return key;
    }
  }
  return null;
}

function calculateYinYangAndFiveElements(year) {
  const yinYang = ['양', '음'];
  const fiveElements = ['목', '화', '토', '금', '수'];

  // 음양 계산
  const yearLastDigit = year % 10;
  const isYin = yearLastDigit % 2 === 0;
  const yinYangElement = isYin ? yinYang[1] : yinYang[0];

  // 오행 계산
  const yearMod = year % 10;
  const fiveElementsIndex = yearMod % 5;
  const fiveElementsElement = fiveElements[fiveElementsIndex];

  return {
    yinYang: yinYangElement,
    fiveElements: fiveElementsElement,
  };
}

function getSajuAnalysis(year, month, day, hours) {
  const { yinYang, fiveElements } = calculateYinYangAndFiveElements(year);

  // 생년월일과 출생시간을 키로 사용하여 사주 분석 결과를 가져옵니다.
  const dateKey = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const timeKey = getTimeRange(hours);

  // 시간에 따라 시주 결정
  const sajuAnalysis = sajuDetails[dateKey] || {
    day: {
      title: '을축',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '축', type: '토' },
      },
      description:
        '을축 (乙丑): 을(乙)의 나무와 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 노력하는 것을 중시하는 성향을 나타냅니다. 축(丑)은 지혜와 근면성을 상징하며, 을(乙)은 부드러움과 협력을 중시합니다.',
    },
    month: {
      title: '갑오',
      pre: {
        first: { title: '갑', type: '목' },
        second: { title: '오', type: '화' },
      },
      description:
        '갑오 (甲午): 갑(甲)의 나무와 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 대담하고 활동적이며, 오(午)는 열정과 에너지를 상징합니다. 갑(甲)은 적극적이고 강한 성격을 나타냅니다.',
    },
    year: {
      title: '을해',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '해', type: '수' },
      },
      description:
        '을해 (乙亥): 을(乙)의 나무와 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 섬세하고 직관적이며, 해(亥)는 감정의 깊이를 상징합니다. 을(乙)은 부드러움과 협력을 중시합니다.',
    },
    time: {
      title: '정미',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '미', type: '토' },
      },
      description:
        '정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.',
    },
  };

  return {
    yinYang,
    fiveElements,
    sajuAnalysis,
  };
}

// 요청 처리 함수
async function handleSajuRequest(req, res) {
  const { name, birth, birthTime } = req.body;

  // 생년월일 및 출생시간을 Date 객체로 변환
  const [year, month, day] = birth.split('-').map(Number);
  const [hours] = birthTime.split(':').map(Number);

  // 사주 분석
  const analysis = getSajuAnalysis(year, month, day, hours);

  // 응답 반환
  res.json({
    code: 'OK',
    message: '음양오행분석에 성공하였습니다',
    data: analysis,
  });
}

async function handleTarotRequest(req, res) {
  const { past, present, future } = req.body;
  console.log(req.body);

  const getCardInfo = (cardName, timeFrame) => tarotDetails[cardName]?.[timeFrame] || '';

  const createCardResponse = (cardName, timeFrame) => ({
    result: getCardInfo(cardName, timeFrame),
    ko: getCardInfo(cardName, 'ko'),
    origin: getCardInfo(cardName, 'origin'),
  });

  const responseData = {
    past: createCardResponse(past, 'past'),
    present: createCardResponse(present, 'present'),
    future: createCardResponse(future, 'future'),
  };

  res.json({
    code: 'OK',
    message: '타로카드 분석에 성공하였습니다',
    data: responseData,
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
  const data = fortuneDatas.find((item) => item.id === parseInt(id));
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
export { handleSajuRequest, handleFortuneRequest, handleGetFortuneRequest, handleTarotRequest };
