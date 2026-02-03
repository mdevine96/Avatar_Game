export async function submitGuess(guessId) {
  const res = await fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guessId })
  });

  return res.json();
}