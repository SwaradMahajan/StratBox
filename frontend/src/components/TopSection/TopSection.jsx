import "./TopSection.css";

import InfoCard from "../InfoCard/InfoCard";
import LiveStandings from "../LiveStandings/LiveStandings";

function TopSection({ raceData }) {
  if (!raceData) {
    return <h2>Loading...</h2>;
  }

  // OFF WEEKEND
  if (raceData.status === "OFF_WEEKEND") {
    return (
      <section className="top-section">
        <div className="race-info">
          <h1>RaceHub</h1>

          <div className="info-card">
            <h2>Latest Race</h2>

            <h3>{raceData.latestRace.grandPrix}</h3>
            <p>{raceData.latestRace.circuit}</p>
            <p>{raceData.latestRace.country}</p>

            <hr />

            <h2>Next Race</h2>

            <h3>{raceData.nextRace.grandPrix}</h3>
            <p>{raceData.nextRace.circuit}</p>
            <p>{raceData.nextRace.country}</p>
          </div>
        </div>
      </section>
    );
  }

  // LIVE RACE
  return (
    <section className="top-section">
      <div className="race-info">
        <h1>{raceData.race.grandPrix}</h1>

        <p>{raceData.race.circuit}</p>

        <InfoCard raceData={raceData.race} />
      </div>

      <LiveStandings />
    </section>
  );
}

export default TopSection;