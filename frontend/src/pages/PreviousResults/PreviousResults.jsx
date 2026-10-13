import { useCallback, useEffect, useState } from "react";
import "./PreviousResults.css";
import RaceCard from "./RaceCard";
import { API_URL } from "../../config";

function PreviousResults() {
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalLoading, setModalLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchResults = useCallback(async ({ showLoader = true } = {}) => {
        try {
            if (showLoader) setLoading(true);
            setError("");

            // Cache-bust the request so the latest API response is fetched.
            const response = await fetch(
                `${API_URL}/api/results?_=${Date.now()}`,
                { cache: "no-store" }
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch previous races (${response.status})`);
            }

            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error("Unexpected response while loading previous races");
            }

            setRaces(data);
        } catch (err) {
            console.error("Previous results error:", err);
            setError("Unable to load previous races. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchResults();

        // Refresh while this page remains open, so newly published results appear.
        const refreshInterval = window.setInterval(() => {
            fetchResults({ showLoader: false });
        }, 5 * 60 * 1000);

        // Refresh when the visitor returns to this browser tab.
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                fetchResults({ showLoader: false });
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            window.clearInterval(refreshInterval);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [fetchResults]);

    const handleViewResults = async (round) => {
        try {
            setModalLoading(true);

            const response = await fetch(
                `${API_URL}/api/results/${round}?_=${Date.now()}`,
                { cache: "no-store" }
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch race results (${response.status})`);
            }

            const data = await response.json();
            if (!data || !Array.isArray(data.results)) {
                throw new Error("No published results are available for this race yet.");
            }

            setSelectedRace(data);
        } catch (err) {
            console.error("Race result error:", err);
            alert(err.message || "Unable to fetch race results.");
        } finally {
            setModalLoading(false);
        }
    };

    const closeModal = () => {
        setSelectedRace(null);
    };

    return (
        <div className="previous-results-page">
            <div className="results-title-row">
                <h1 className="racehub-heading">PREVIOUS RESULTS</h1>
                <button
                    className="results-btn"
                    type="button"
                    onClick={() => fetchResults()}
                    disabled={loading}
                    aria-label="Refresh previous results"
                >
                    {loading ? "Refreshing..." : "Refresh ↻"}
                </button>
            </div>

            {loading ? (
                <div className="loading">Loading previous races...</div>
            ) : error ? (
                <div className="error">
                    <p>{error}</p>
                    <button className="results-btn" type="button" onClick={() => fetchResults()}>
                        Try Again
                    </button>
                </div>
            ) : races.length === 0 ? (
                <div className="loading">
                    No completed race results are available from the API yet.
                </div>
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
                        <button className="close-btn" onClick={closeModal} aria-label="Close results">
                            ✕
                        </button>

                        <h2>{selectedRace.raceName}</h2>

                        <p>
                            <strong>Circuit:</strong> {selectedRace.circuit}
                        </p>
                        <p>
                            <strong>Location:</strong> {selectedRace.locality}, {selectedRace.country}
                        </p>
                        <p>
                            <strong>Date:</strong>{" "}
                            {new Date(selectedRace.date).toLocaleDateString()}
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
                                    {selectedRace.results.map((driver) => (
                                        <tr key={driver.position}>
                                            <td>{driver.position}</td>
                                            <td>{driver.driver}</td>
                                            <td>{driver.constructor}</td>
                                            <td>{driver.grid}</td>
                                            <td>{driver.laps}</td>
                                            <td>{driver.time}</td>
                                            <td>{driver.points}</td>
                                        </tr>
                                    ))}
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
