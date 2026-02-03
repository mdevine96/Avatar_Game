export function compare(guess, answer) {
  if (!guess || !answer) return 'none';
  if (guess === answer) return 'correct';
  return 'wrong';
}