import strategyData from "../data/strategyData.js";

export const getStrategy = (req, res) => {

    const driverId = Number(req.params.driverId);

    const strategy = strategyData[driverId];

    if (!strategy) {
        return res.status(404).json({
            message: "Strategy not found",
        });
    }

    res.json(strategy);
};