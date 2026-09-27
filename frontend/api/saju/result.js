import { handleSajuRequest } from '../_tools.js';

export default async function handler(req, res) {
  try {
    return await handleSajuRequest(req, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
}
