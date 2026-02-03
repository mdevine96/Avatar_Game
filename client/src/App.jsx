import { submitGuess } from './api';

export default function App() {
  async function handleGuess() {
    const result = await submitGuess(1);
    console.log(result);
  }

  return (
    <div>
      <h1>Avatar Wordle</h1>
      <button onClick={handleGuess}>Test Guess</button>
    </div>
  );
}