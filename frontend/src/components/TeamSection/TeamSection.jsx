import "./TeamSection.css";

import TeamSelector from "../TeamSelector/TeamSelector";
import DriverSelector from "../DriverSelector/DriverSelector";

function TeamSection() {
  return (
    <div className="team-section">
      <TeamSelector />
      <DriverSelector />
    </div>
  );
}

export default TeamSection;