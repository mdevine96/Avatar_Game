import express from 'express';
import { supabase } from '../supabaseClient.js';
import { getDailyAnswerId } from '../utils/daily-answer.js';
import { compare } from '../utils/compare.js';

const router = express.Router();

router.post('/guess', async (req, res) => {
  const { guessId } = req.body;

  const answerId = await getDailyAnswerId();

  const { data: answer } = await supabase
    .from('avatar_characters')
    .select('*')
    .eq('ID', answerId)
    .single();

  const { data: guess } = await supabase
    .from('avatar_characters')
    .select('*')
    .eq('ID', guessId)
    .single();

  const result = {
    First_Name: compare(guess.First_Name, answer.First_Name),
    Nation: compare(guess.Nation, answer.Nation),
    Evil_by_End: compare(guess.Evil_by_End, answer.Evil_by_End),
    Capable_of_Bending: compare(
      guess.Capable_of_Bending,
      answer.Capable_of_Bending
    ),
    Book_Introduced: compare(
      guess.Book_Introduced,
      answer.Book_Introduced
    )
  };

  res.json(result);
});

export default router;