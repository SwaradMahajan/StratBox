import express from "express";
import { getStrategy } from "../controllers/strategyController.js";

const router = express.Router();

router.get("/:driverId", getStrategy);

export default router;