import { fortuneDatas } from './datas.js';
import { handleSajuRequest, handleTarotRequest } from '../frontend/api/_tools.js';

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
