import { handleSajuRequest } from '../_tools.ts';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await handleSajuRequest(req, res);
  } catch (error) {
    console.error(error);
    res.status(200).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
}
