const API_BASE = import.meta.env.VITE_API_URL;

export async function submitGuess(guessId) {
  const res = await fetch(`${API_BASE}/api/guess`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guessId })
  });
  return res.json();
}