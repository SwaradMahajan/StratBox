import "./TopSection.css";

import raceData from "../../data/raceData";
import InfoCard from "../InfoCard/InfoCard";
import LiveStandings from "../LiveStandings/LiveStandings";

function TopSection() {
  return (
    <section className="top-section">

      <div className="race-info">

        <h1>{raceData.grandPrix}</h1>

        <p>{raceData.circuit}</p>

        <InfoCard />

      </div>

      <LiveStandings />

    </section>
  );
}

export default TopSection;