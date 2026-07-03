import { getRaceData } from "../services/raceService.js";

export const getRace = async (req, res) => {
  try {
    const race = await getRaceData();

    res.json(race);
  } catch (error) {
    console.error("Race Controller Error:", error);

    res.status(500).json({
      message: "Failed to fetch race data",
      error: error.message,
    });
  }
};