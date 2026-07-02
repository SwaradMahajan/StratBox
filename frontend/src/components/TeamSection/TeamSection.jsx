import { useState } from "react";

import "./TeamSection.css";

import TeamSelector from "../TeamSelector/TeamSelector";
import DriverSelector from "../DriverSelector/DriverSelector";
import StrategyPanel from "../StrategyPanel/StrategyPanel";

function TeamSection() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleTeamSelect = (teamId) => {
    setSelectedTeam(teamId);
    setSelectedDriver(null);
  };

  return (
    <div className="team-section">
      <TeamSelector
        selectedTeam={selectedTeam}
        setSelectedTeam={handleTeamSelect}
      />

      <DriverSelector
        selectedTeam={selectedTeam}
        selectedDriver={selectedDriver}
        setSelectedDriver={setSelectedDriver}
      />

      <StrategyPanel
        selectedDriver={selectedDriver}
      />
    </div>
  );
}

export default TeamSection;