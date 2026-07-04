import { useEffect, useState } from "react";
import "./PreviousResults.css";
import RaceCard from "./RaceCard";
import { API_URL } from "../../config";

function PreviousResults() {
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalLoading, setModalLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${API_URL}/api/results`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch previous races");
            }

            const data = await response.json();

            setRaces(data);
        } catch (err) {
            console.error(err);
            setError("Unable to load previous races.");
        } finally {
            setLoading(false);
        }
    };

    const handleViewResults = async (round) => {
        try {
            setModalLoading(true);

            const response = await fetch(
                `${API_URL}/api/results/${round}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch race results");
            }

            const data = await response.json();

            setSelectedRace(data);
        } catch (err) {
            console.error(err);
            alert("Unable to fetch race results.");
        } finally {
            setModalLoading(false);
        }
    };

    const closeModal = () => {
        setSelectedRace(null);
    };

    return (
        <div className="previous-results-page">
            <h1 className="racehub-heading">
                PREVIOUS RESULTS
            </h1>

            {loading ? (
                <div className="loading">Loading previous races...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="race-grid">
                    {races.map((race) => (
                        <RaceCard
                            key={race.round}
                            race={race}
                            onView={handleViewResults}
                        />
                    ))}
                </div>
            )}

            {selectedRace && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        <h2>{selectedRace.raceName}</h2>

                        <p>
                            <strong>Circuit:</strong>{" "}
                            {selectedRace.circuit}
                        </p>

                        <p>
                            <strong>Location:</strong>{" "}
                            {selectedRace.locality},{" "}
                            {selectedRace.country}
                        </p>

                        <p>
                            <strong>Date:</strong>{" "}
                            {new Date(
                                selectedRace.date
                            ).toLocaleDateString()}
                        </p>

                        {modalLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <table className="results-table">
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Driver</th>
                                        <th>Team</th>
                                        <th>Grid</th>
                                        <th>Laps</th>
                                        <th>Time / Status</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {selectedRace.results.map(
                                        (driver) => (
                                            <tr key={driver.position}>
                                                <td>
                                                    {driver.position}
                                                </td>

                                                <td>
                                                    {driver.driver}
                                                </td>

                                                <td>
                                                    {
                                                        driver.constructor
                                                    }
                                                </td>

                                                <td>
                                                    {driver.grid}
                                                </td>

                                                <td>
                                                    {driver.laps}
                                                </td>

                                                <td>
                                                    {driver.time}
                                                </td>

                                                <td>
                                                    {driver.points}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PreviousResults;