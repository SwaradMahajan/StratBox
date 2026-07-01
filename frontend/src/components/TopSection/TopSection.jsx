import "./TopSection.css";

import CurrentRacePanel from "../CurrentRacePanel/CurrentRacePanel";
import LiveStandings from "../LiveStandings/LiveStandings";

function TopSection() {
  return (
    <div className="top-section">
      <CurrentRacePanel />
      <LiveStandings />
    </div>
  );
}

export default TopSection;