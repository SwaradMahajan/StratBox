import { getStrategyForDriver } from "../services/strategyService.js";

export const getStrategy = (req, res) => {

    const driverId = Number(req.params.driverId);

    const strategy = getStrategyForDriver(driverId);

    if (!strategy) {
        return res.status(404).json({
            message: "Strategy not found",
        });
    }

    res.json(strategy);

};