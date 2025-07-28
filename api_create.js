const { nanoid } = require('nanoid');

const urlMap = {};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url || !url.startsWith('https://www.roblox.com')) {
    return res.status(400).json({ error: 'Invalid Roblox URL' });
  }

  const shortCode = nanoid(6);
  urlMap[shortCode] = url;

  return res.status(200).json({ shortCode });
}