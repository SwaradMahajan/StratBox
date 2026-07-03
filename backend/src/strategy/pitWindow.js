export function hasSafePitWindow(gapBehind) {
  const PIT_LOSS = 22;

  return gapBehind > PIT_LOSS;
}