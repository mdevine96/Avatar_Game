export default function GuessInput({ onSubmit, disabled }) {
  return (
    <button onClick={onSubmit} disabled={disabled}>
      Submit Guess
    </button>
  );
}