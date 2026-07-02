import "./TeamSelector.css";
import teams from "../../data/teams";

function TeamSelector({ selectedTeam, setSelectedTeam }) {
  return (
    <div className="team-selector">
      <h2>Select Team</h2>

      <div className="team-grid">
        {teams.map((team) => (
          <div
            key={team.id}
            className={`team-card ${
              selectedTeam === team.id ? "active" : ""
            }`}
            onClick={() => setSelectedTeam(team.id)}
          >
            {team.name}
          </div>
        ))}
      </div>

      <p>
        Selected Team:{" "}
        {selectedTeam
          ? teams.find((team) => team.id === selectedTeam).name
          : "None"}
      </p>
    </div>
  );
}

export default TeamSelector;