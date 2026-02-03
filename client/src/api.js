const API_BASE = import.meta.env.VITE_API_URL;

if (!API_BASE) {
  console.error('VITE_API_URL not set! Make sure it is set in Render or .env.local');
}

export async function submitGuess(guessId) {
  const url = `${API_BASE}/api/guess`;
  console.log('Submitting guess to:', url);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guessId })
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server returned ${res.status}: ${text}`);
    }

    const data = await res.json();
    console.log('API response:', data);
    return data;
  } catch (err) {
    console.error('Error submitting guess:', err);
    alert('Error submitting guess. See console for details.');
    throw err;
  }
}