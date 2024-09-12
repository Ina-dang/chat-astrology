import { handleTarotRequest } from '../_tools';

export default async function handler(req, res) {
  try {
    await handleTarotRequest(res);
  } catch (error) {
    console.error(error);
    res.status(200).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
}
