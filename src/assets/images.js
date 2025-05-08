import { analyzeImages } from '../../utils/imageAnalyzer';

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const images = analyzeImages();
      res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
