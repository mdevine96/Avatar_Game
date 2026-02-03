// server/routes/game.js
import express from 'express';
const router = express.Router();

router.post('/guess', async (req, res) => {
  const { guessId } = req.body;
  if (!guessId) return res.status(400).json({ error: 'Missing guessId' });

  // Temporary dummy response for testing
  res.json({ guessId, message: 'Success! Backend is working.' });
});

export default router;