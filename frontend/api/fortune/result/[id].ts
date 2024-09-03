import { VercelRequest, VercelResponse } from '@vercel/node';
import { handleGetFortuneRequest } from '../../_tools.ts';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { id } = req.query; // 동적 경로 파라미터는 req.query에서 가져옵니다.
    await handleGetFortuneRequest(id, res);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
}
