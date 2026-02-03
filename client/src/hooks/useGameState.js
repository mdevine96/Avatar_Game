import { useState } from 'react';

export function useGameState() {
  const [guesses, setGuesses] = useState([]);
  const [results, setResults] = useState([]);

  const addGuess = (guessId, result) => {
    setGuesses([...guesses, guessId]);
    setResults([...results, result]);
  };

  return {
    guesses,
    results,
    addGuess,
    isGameOver: guesses.length >= 5
  };
}