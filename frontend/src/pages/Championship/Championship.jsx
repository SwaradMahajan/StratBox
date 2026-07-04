import { useEffect, useState } from "react";
import "./Championship.css";

function Championship() {
    const [drivers, setDrivers] = useState([]);
    const [constructors, setConstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStandings();
    }, []);

    const fetchStandings = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/standings"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch standings");
            }

            const data = await response.json();

            setDrivers(data.drivers);
            setConstructors(data.constructors);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
    return (
        <div className="previous-results-page">

            <h1 className="racehub-heading">
                CHAMPIONSHIP STANDINGS
            </h1>

            <div className="loading">
                Loading championship standings...
            </div>

        </div>
    );
}

    return (
        <div className="championship-page">

            <h1 className="racehub-heading">
                CHAMPIONSHIP STANDINGS
            </h1>

            {/* Driver Standings */}

            <section className="standings-section">

                <h2 className="standings-heading">
                    Driver Standings
                </h2>

                <table className="standings-table">

                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Driver</th>
                            <th>Team</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                    </thead>

                    <tbody>

                        {drivers.map((driver, index) => (

                            <tr
                                key={driver.position}
                                className={
                                    index === 0
                                        ? "gold"
                                        : index === 1
                                        ? "silver"
                                        : index === 2
                                        ? "bronze"
                                        : ""
                                }
                            >

                                <td>
                                    {index === 0
                                        ? "🥇"
                                        : index === 1
                                        ? "🥈"
                                        : index === 2
                                        ? "🥉"
                                        : driver.position}
                                </td>

                                <td>{driver.driver}</td>

                                <td>{driver.constructor}</td>

                                <td>{driver.wins}</td>

                                <td>{driver.points}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </section>

            {/* Constructor Standings */}

            <section className="standings-section">

                <h2 className="standings-heading">
                    Constructor Standings
                </h2>

                <table className="standings-table">

                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Constructor</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                    </thead>

                    <tbody>

                        {constructors.map((team, index) => (

                            <tr
                                key={team.position}
                                className={
                                    index === 0
                                        ? "gold"
                                        : index === 1
                                        ? "silver"
                                        : index === 2
                                        ? "bronze"
                                        : ""
                                }
                            >

                                <td>
                                    {index === 0
                                        ? "🥇"
                                        : index === 1
                                        ? "🥈"
                                        : index === 2
                                        ? "🥉"
                                        : team.position}
                                </td>

                                <td>{team.constructor}</td>

                                <td>{team.wins}</td>

                                <td>{team.points}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </section>

        </div>
    );
}

export default Championship;