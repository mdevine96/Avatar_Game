import { submitGuess } from './api';
import { useGameState } from './hooks/useGameState';
import GuessRow from './components/GuessRow';

export default function App() {
  const { results, addGuess, isGameOver } = useGameState();

  async function handleGuess() {
    const guessId = 1; // temp: replace with selector
    const result = await submitGuess(guessId);
    addGuess(guessId, result);
  }

  return (
    <div className="app">
      {results.map((r, i) => (
        <GuessRow key={i} result={r} />
      ))}

      <button onClick={handleGuess} disabled={isGameOver}>
        Guess
      </button>
    </div>
  );
}