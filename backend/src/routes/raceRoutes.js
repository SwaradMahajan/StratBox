import express from "express";
import { getRace } from "../controllers/raceController.js";

const router = express.Router();

router.get("/", getRace);

export default router;