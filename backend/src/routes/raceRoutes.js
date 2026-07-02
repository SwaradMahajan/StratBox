import express from "express";
import { getRaceData } from "../controllers/raceController.js";

const router = express.Router();

router.get("/", getRaceData);

export default router;