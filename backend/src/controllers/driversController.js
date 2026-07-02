import drivers from "../data/drivers.js";

export const getDrivers = (req, res) => {
    res.json(drivers);
};