import { VercelRequest, VercelResponse } from '@vercel/node';
import { handleFortuneRequest } from '../_tools.ts';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await handleFortuneRequest(res);
  } catch (error) {
    console.error(error);
    res.status(200).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
}
