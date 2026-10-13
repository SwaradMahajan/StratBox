const BASE_URL = "https://api.jolpi.ca/ergast/f1/2026";
const LIMIT = 100;

export const getPreviousResults = async () => {
    try {
        // Jolpica caps the result limit at 100, so page through all records.
        const firstResponse = await fetch(
            `${BASE_URL}/results.json?limit=${LIMIT}&offset=0`,
            { cache: "no-store", headers: { "User-Agent": "StratBox/1.0.0" } }
        );

        if (!firstResponse.ok) {
            throw new Error(`Failed to fetch previous results (${firstResponse.status})`);
        }

        const firstData = await firstResponse.json();
        const total = Number(firstData.MRData?.total || 0);
        const racesByRound = new Map();

        const mergePage = (pageData) => {
            const pageRaces = pageData.MRData?.RaceTable?.Races || [];

            for (const race of pageRaces) {
                const round = String(race.round);
                if (!racesByRound.has(round)) {
                    racesByRound.set(round, { ...race, Results: [] });
                }

                const savedRace = racesByRound.get(round);
                const resultsByDriver = new Map(
                    savedRace.Results.map((result) => [
                        result.Driver.driverId,
                        result,
                    ])
                );

                for (const result of race.Results || []) {
                    resultsByDriver.set(result.Driver.driverId, result);
                }

                savedRace.Results = [...resultsByDriver.values()];
            }
        };

        mergePage(firstData);

        for (let offset = LIMIT; offset < total; offset += LIMIT) {
            const response = await fetch(
                `${BASE_URL}/results.json?limit=${LIMIT}&offset=${offset}`,
                { cache: "no-store", headers: { "User-Agent": "StratBox/1.0.0" } }
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch results page at offset ${offset} (${response.status})`);
            }

            mergePage(await response.json());
        }

        return [...racesByRound.values()]
            .filter((race) => race.Results.length > 0)
            .map((race) => {
                const winner = race.Results.find(
                    (result) => result.position === "1"
                ) || race.Results[0];

                return {
                    round: race.round,
                    raceName: race.raceName,
                    circuit: race.Circuit.circuitName,
                    locality: race.Circuit.Location.locality,
                    country: race.Circuit.Location.country,
                    date: race.date,
                    winner: `${winner.Driver.givenName} ${winner.Driver.familyName}`,
                };
            })
            .sort((a, b) => Number(a.round) - Number(b.round));
    } catch (error) {
        console.error("Error fetching previous results:", error);
        throw error;
    }
};

export const getRaceResult = async (round) => {
    try {
        const response = await fetch(
            `${BASE_URL}/${round}/results.json?limit=${LIMIT}`,
            { cache: "no-store", headers: { "User-Agent": "StratBox/1.0.0" } }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch race result (${response.status})`);
        }

        const data = await response.json();
        const race = data.MRData?.RaceTable?.Races?.[0];

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
            results: (race.Results || []).map((driver) => ({
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
