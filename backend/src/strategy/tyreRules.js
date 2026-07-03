export function tyreNeedsChanging(tyre, tyreAge) {
  const limits = {
    Soft: 15,
    Medium: 25,
    Hard: 35,
  };

  return tyreAge >= limits[tyre];
}