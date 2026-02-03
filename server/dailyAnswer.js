import { supabase } from '../supabaseClient.js';

export async function getDailyAnswerId() {
  const today = new Date().toISOString().split('T')[0];

  const { data } = await supabase
    .from('daily_answer')
    .select('character_id')
    .eq('date', today)
    .single();

  if (data) return data.character_id;

  const { data: characters } = await supabase
    .from('avatar_characters')
    .select('ID');

  const random =
    characters[Math.floor(Math.random() * characters.length)];

  await supabase.from('daily_answer').insert({
    date: today,
    character_id: random.ID
  });

  return random.ID;
}