import strategyData from "../data/strategyData.js";

export const getStrategyForDriver = (driverId) => {

    return strategyData[driverId];

};