import raceData from "../data/raceData.js";

export const getRaceData = (req, res) => {
    res.json(raceData);
};