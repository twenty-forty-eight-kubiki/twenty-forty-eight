export const getBestScore = (
  bestScore: number,
  currentScore: number
): number => {
  return bestScore > currentScore ? bestScore : currentScore;
};
