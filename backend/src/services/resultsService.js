const BASE_URL = "https://api.jolpi.ca/ergast/f1/2026";
const LIMIT = 1000;

export const getPreviousResults = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/results.json?limit=${LIMIT}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch previous results");
        }

        const data = await response.json();

        return data.MRData.RaceTable.Races
            .filter((race) => race.Results && race.Results.length > 0)
            .map((race) => ({
                round: race.round,
                raceName: race.raceName,
                circuit: race.Circuit.circuitName,
                locality: race.Circuit.Location.locality,
                country: race.Circuit.Location.country,
                date: race.date,
                winner: `${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`,
            }));
    } catch (error) {
        console.error("Error fetching previous results:", error);
        throw error;
    }
};

export const getRaceResult = async (round) => {
    try {
        const response = await fetch(
            `${BASE_URL}/${round}/results.json?limit=${LIMIT}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch race result");
        }

        const data = await response.json();

        const race = data.MRData.RaceTable.Races[0];

        if (!race) {
            return null;
        }

        return {
            round: race.round,
            raceName: race.raceName,
            circuit: race.Circuit.circuitName,
            locality: race.Circuit.Location.locality,
            country: race.Circuit.Location.country,
            date: race.date,

            results: race.Results.map((driver) => ({
                position: driver.position,
                driver: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                constructor: driver.Constructor.name,
                grid: driver.grid,
                laps: driver.laps,
                time: driver.Time ? driver.Time.time : driver.status,
                points: driver.points,
                status: driver.status,
            })),
        };
    } catch (error) {
        console.error("Error fetching race result:", error);
        throw error;
    }
};