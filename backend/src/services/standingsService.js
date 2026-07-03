const BASE_URL = "https://api.jolpi.ca/ergast/f1/2026";

export const getStandingsData = async () => {
    try {
        const [driverResponse, constructorResponse] = await Promise.all([
            fetch(`${BASE_URL}/driverStandings.json`),
            fetch(`${BASE_URL}/constructorStandings.json`)
        ]);

        if (!driverResponse.ok || !constructorResponse.ok) {
            throw new Error("Failed to fetch championship standings");
        }

        const driverData = await driverResponse.json();
        const constructorData = await constructorResponse.json();

        const driverStandings =
            driverData.MRData.StandingsTable.StandingsLists[0]?.DriverStandings.map(
                (driver) => ({
                    position: driver.position,
                    points: driver.points,
                    wins: driver.wins,
                    driver: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                    code: driver.Driver.code,
                    constructor: driver.Constructors[0].name,
                })
            ) || [];

        const constructorStandings =
            constructorData.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings.map(
                (team) => ({
                    position: team.position,
                    points: team.points,
                    wins: team.wins,
                    constructor: team.Constructor.name,
                })
            ) || [];

        return {
            drivers: driverStandings,
            constructors: constructorStandings,
        };
    } catch (error) {
        console.error("Standings Service Error:", error);
        throw error;
    }
};