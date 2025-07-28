const urlMap = {};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { shortCode } = req.body;

  if (!shortCode || !urlMap[shortCode]) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  return res.status(200).json({ originalUrl: urlMap[shortCode] });
}