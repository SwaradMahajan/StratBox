import "./RaceCard.css";

function RaceCard({ race, onView }) {
    return (
        <div className="race-card">
            <div className="race-card-header">
                <h2>{race.raceName}</h2>
                <span className="round-badge">Round {race.round}</span>
            </div>

            <div className="race-card-body">
                <p>
                    <strong>🏁 Winner:</strong> {race.winner}
                </p>

                <p>
                    <strong>📍 Circuit:</strong> {race.circuit}
                </p>

                <p>
                    <strong>🌍 Location:</strong>{" "}
                    {race.locality}, {race.country}
                </p>

                <p>
                    <strong>📅 Date:</strong>{" "}
                    {new Date(race.date).toLocaleDateString()}
                </p>
            </div>

            <button
                className="view-results-btn"
                onClick={() => onView(race.round)}
            >
                View Results →
            </button>
        </div>
    );
}

export default RaceCard;