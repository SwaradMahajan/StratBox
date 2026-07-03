import "./InfoCard.css";

function InfoCard({ raceData }) {
  return (
    <div className="info-card">

      <div className="info-grid">

        <div className="info-item">
          <h4>Current Lap</h4>
          <h2>
            {raceData.currentLap} / {raceData.totalLaps}
          </h2>
        </div>

        <div className="info-item">
          <h4>Flag</h4>

          <h2
            style={{
              color: raceData.raceFlag.color,
            }}
          >
            ● {raceData.raceFlag.name}
          </h2>
        </div>

        <div className="info-item">
          <h4>Track Temp</h4>
          <h2>{raceData.trackTemperature}°C</h2>
        </div>

        <div className="info-item">
          <h4>Air Temp</h4>
          <h2>{raceData.airTemperature}°C</h2>
        </div>

      </div>

      <hr />

      <div className="fastest-lap">
        <h4>Fastest Lap</h4>

        <h2>{raceData.fastestLap.driver}</h2>

        <p>{raceData.fastestLap.time}</p>
      </div>

    </div>
  );
}

export default InfoCard;