import { sajuDetails, fortuneDatas, defaultSajuData } from './datas.js';

const timeRanges = {
  자: [0, 1], // 자시: 23:00 ~ 01:00
  축: [1, 3], // 축시: 01:00 ~ 03:00
  인: [3, 5], // 인시: 03:00 ~ 05:00
  묘: [5, 7], // 묘시: 05:00 ~ 07:00
  진: [7, 9], // 진시: 07:00 ~ 09:00
  사: [9, 11], // 사시: 09:00 ~ 11:00
  오: [11, 13], // 오시: 11:00 ~ 13:00
  미: [13, 15], // 미시: 13:00 ~ 15:00
  신: [15, 17], // 신시: 15:00 ~ 17:00
  유: [17, 19], // 유시: 17:00 ~ 19:00
  술: [19, 21], // 술시: 19:00 ~ 21:00
  해: [21, 23], // 해시: 21:00 ~ 23:00
};

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
  const dateKey = `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;
  const timeKey = getTimeRange(hours);

  // 시간에 따라 시주 결정
  const sajuAnalysis = sajuDetails[dateKey] || defaultSajuData;

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

  const tarotMap = tarotDetails.reduce((acc, card) => {
    const [key, value] = Object.entries(card)[0];
    acc[value.ko] = value;
    return acc;
  }, {});

  const getCardInfo = (cardName) =>
    tarotMap[cardName] || { past: '', present: '', future: '' };

  const responseData = {
    past: getCardInfo(past),
    present: getCardInfo(present),
    future: getCardInfo(future),
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
export {
  handleSajuRequest,
  handleFortuneRequest,
  handleGetFortuneRequest,
  handleTarotRequest,
};
