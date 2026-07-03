import { generateStrategy } from "../strategy/strategyEngine.js";

// LIVE MODE
export const getStrategyData = async (driverId) => {

  // TODO:
  // Replace these mock values with OpenF1 live telemetry.

  const raceData = {
    type: "Medium",
    tyreAge: 24,
    lapsRemaining: 18,
    gapAhead: 1.8,
    gapBehind: 30,
    weather: "Dry",
    safetyCar: false,
  };

  return generateStrategy(raceData);
};


// STRATEGY LAB
export const generateStrategyData = async (raceData) => {
  return generateStrategy(raceData);
};