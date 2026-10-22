export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ code: 'ERROR', message: 'GET 요청만 가능합니다.' });
  }
  console.info('NODE_RUNTIME_VERSION', process.version);
  return res.json({ code: 'OK', service: 'woldam', time: new Date().toISOString() });
}
