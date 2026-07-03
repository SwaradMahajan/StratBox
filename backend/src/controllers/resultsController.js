import {
    getPreviousResults,
    getRaceResult,
} from "../services/resultsService.js";

export const fetchPreviousResults = async (req, res) => {
    try {
        const results = await getPreviousResults();
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching previous results:", error.message);

        res.status(500).json({
            message: "Failed to fetch previous results.",
        });
    }
};

export const fetchRaceResult = async (req, res) => {
    try {
        const { round } = req.params;

        const result = await getRaceResult(round);

        if (!result) {
            return res.status(404).json({
                message: "Race not found.",
            });
        }

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching race result:", error.message);

        res.status(500).json({
            message: "Failed to fetch race result.",
        });
    }
};