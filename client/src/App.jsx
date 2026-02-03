import React from 'react';
import { submitGuess } from './api';

export default function App() {
  const handleTestGuess = async () => {
    try {
      // Replace '1' with any valid guess ID for testing
      const result = await submitGuess(1);
      alert(`Guess result: ${JSON.stringify(result)}`);
    } catch (err) {
      console.error('Failed to submit guess:', err);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Avatar Wordle</h1>
      <p>Click the button below to test your guess API:</p>
      <button
        onClick={handleTestGuess}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        Test Guess
      </button>
    </div>
  );
}