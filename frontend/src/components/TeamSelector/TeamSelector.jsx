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
            style={{
              borderColor:
                selectedTeam === team.id
                  ? team.color
                  : "#30363d",
            }}
            onClick={() => setSelectedTeam(team.id)}
          >

            <div
              className="team-accent"
              style={{ backgroundColor: team.color }}
            />

            <img
              src={team.logo}
              alt={team.name}
              className="team-logo"
            />

            <p>{team.name}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TeamSelector;