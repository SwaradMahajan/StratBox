const BASE_URL = "https://api.jolpi.ca/ergast/f1/2026";
const LIMIT = 100;

export const getRaceData = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}.json?limit=${LIMIT}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch race schedule");
        }

        const data = await response.json();

        const races = data.MRData.RaceTable.Races;

        const now = new Date();

        let latestRace = null;
        let nextRace = null;
        let weekendRace = null;

        for (const race of races) {

            const raceDate = new Date(race.date);

            if (raceDate <= now) {
                latestRace = race;
            }

            if (raceDate > now && !nextRace) {
                nextRace = race;
            }

            const friday = new Date(raceDate);
            friday.setDate(friday.getDate() - 2);
            friday.setHours(0, 0, 0, 0);

            const sunday = new Date(raceDate);
            sunday.setHours(23, 59, 59, 999);

            if (now >= friday && now <= sunday) {
                weekendRace = race;
            }
        }

        /* ==========================
           RACE WEEKEND
        ========================== */

        if (weekendRace) {

            return {

                status: "RACE_WEEKEND",

                race: {

                    round: weekendRace.round,

                    grandPrix: weekendRace.raceName,

                    circuit: weekendRace.Circuit.circuitName,

                    locality:
                        weekendRace.Circuit.Location.locality,

                    country:
                        weekendRace.Circuit.Location.country,

                    date: weekendRace.date,

                },

            };

        }

        /* ==========================
           OFF WEEKEND
        ========================== */

        return {

            status: "OFF_WEEKEND",

            latestRace: latestRace
                ? {
                      round: latestRace.round,
                      grandPrix: latestRace.raceName,
                      circuit: latestRace.Circuit.circuitName,
                      locality:
                          latestRace.Circuit.Location.locality,
                      country:
                          latestRace.Circuit.Location.country,
                      date: latestRace.date,
                  }
                : null,

            nextRace: nextRace
                ? {
                      round: nextRace.round,
                      grandPrix: nextRace.raceName,
                      circuit: nextRace.Circuit.circuitName,
                      locality:
                          nextRace.Circuit.Location.locality,
                      country:
                          nextRace.Circuit.Location.country,
                      date: nextRace.date,
                  }
                : null,

        };

    } catch (error) {

        console.error("Race Service Error:", error);

        throw error;

    }
};