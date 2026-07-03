import {
  getStrategyData,
  generateStrategyData,
} from "../services/strategyService.js";

export const getStrategy = async (req, res) => {
  try {
    const { driverId } = req.params;

    const strategy = await getStrategyData(driverId);

    res.json(strategy);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate strategy",
      error: error.message,
    });
  }
};

export const generateStrategy = async (req, res) => {
  try {
    const strategy = await generateStrategyData(req.body);

    res.json(strategy);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate strategy",
      error: error.message,
    });
  }
};