import "./CurrentRacePanel.css";

function CurrentRacePanel() {
  const raceData = {
    grandPrix: "British Grand Prix",
    circuit: "Silverstone Circuit",
    session: "Race",
    lap: 34,
    totalLaps: 52,
    flag: "🟢 Green",
    trackTemp: "42°C",
    airTemp: "27°C",
    fastestDriver: "NOR",
    fastestLap: "1:28.742",
  };

  return (
    <section className="race-panel">
      <div className="race-stats">

        <div className="stat">
          <h4>Current Lap</h4>
          <p>{raceData.lap} / {raceData.totalLaps}</p>
        </div>

        <div className="stat">
          <h4>Flag</h4>
          <p>{raceData.flag}</p>
        </div>

        <div className="stat">
          <h4>Track Temp</h4>
          <p>{raceData.trackTemp}</p>
        </div>

        <div className="stat">
          <h4>Air Temp</h4>
          <p>{raceData.airTemp}</p>
        </div>

      </div>

      <div className="fastest-lap">
        <h4>Fastest Lap</h4>
        <p>{raceData.fastestDriver}</p>
        <span>{raceData.fastestLap}</span>
      </div>

    </section>
  );
}

export default CurrentRacePanel;