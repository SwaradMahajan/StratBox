import { getDriversData } from "../services/driversService.js";

export const getDrivers = (req, res) => {
    const drivers = getDriversData();

    res.json(drivers);
};