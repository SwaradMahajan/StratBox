import express from "express";
import {
  getStrategy,
  generateStrategy,
} from "../controllers/strategyController.js";

const router = express.Router();

router.get("/:driverId", getStrategy);   // Live strategy

router.post("/", generateStrategy);      // Strategy Lab

export default router;