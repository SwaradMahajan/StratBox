export function generateStrategy(data) {
  const {
    type,
    tyreAge,
    lapsRemaining,
    gapAhead,
    gapBehind,
    weather,
    safetyCar,
  } = data;

  let oneStopTyre = "Hard";

  if (type === "Hard") {
    oneStopTyre = "Medium";
  }

  if (weather === "Wet") {
    oneStopTyre = "Intermediate";
  }

  let recommendedPit = tyreAge + 6;

  if (recommendedPit > lapsRemaining) {
    recommendedPit = lapsRemaining - 1;
  }

  if (recommendedPit < 1) {
    recommendedPit = 1;
  }

  // Safety Car = pit immediately
  if (safetyCar) {
    recommendedPit = 0;
  }

  // Free air available
  if (gapBehind > 22) {
    recommendedPit = Math.max(recommendedPit - 2, 0);
  }

  // Stuck behind another car
  if (gapAhead < 1.5) {
    recommendedPit = Math.max(recommendedPit - 1, 0);
  }

  return {
    currentTyre: type,

    tyreAge: tyreAge,

    oneStop: {
      pitLap: recommendedPit,
      nextTyre: oneStopTyre,
    },

    twoStop: {
      firstPit: Math.max(tyreAge + 4, 12),

      firstTyre: "Hard",

      secondPit: Math.max(lapsRemaining - 12, 35),

      secondTyre: "Soft",
    },
  };
}