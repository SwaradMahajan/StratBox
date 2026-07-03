import express from "express";

import {
    fetchPreviousResults,
    fetchRaceResult,
} from "../controllers/resultsController.js";

const router = express.Router();

router.get("/", fetchPreviousResults);

router.get("/:round", fetchRaceResult);

export default router;