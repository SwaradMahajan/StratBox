import { getRaceData } from "../services/raceService.js";

export const getRace = (req, res) => {
    const race = getRaceData();

    res.json(race);
};