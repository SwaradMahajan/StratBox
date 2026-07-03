export function canReachFinish(tyre, tyreAge, lapsRemaining) {
  const limits = {
    Soft: 15,
    Medium: 25,
    Hard: 35,
  };

  const remainingLife = limits[tyre] - tyreAge;

  return remainingLife >= lapsRemaining;
}