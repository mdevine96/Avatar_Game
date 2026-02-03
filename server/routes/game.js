import express from 'express';
const router = express.Router();

// POST /api/guess
router.post('/guess', async (req, res) => {
  const { guessId } = req.body;
  if (!guessId) return res.status(400).json({ error: 'Missing guessId' });

  // Dummy response for testing
  res.json({
    guessId,
    characterName: "Aang",
    message: "Success! Backend is working."
  });
});

export default router;