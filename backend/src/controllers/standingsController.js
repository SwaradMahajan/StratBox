import { getStandingsData } from "../services/standingsService.js";

export const getStandings = async (req, res) => {
    try {
        const standings = await getStandingsData();
        res.json(standings);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch standings",
            error: error.message
        });
    }
};