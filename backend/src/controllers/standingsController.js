import { getStandingsData } from "../services/standingsService.js";

export const getStandings = (req, res) => {
    const standings = getStandingsData();

    res.json(standings);
};