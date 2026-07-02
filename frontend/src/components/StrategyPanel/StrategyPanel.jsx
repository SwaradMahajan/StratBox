import "./StrategyPanel.css";

function StrategyPanel({ selectedDriver }) {
  if (!selectedDriver) {
    return (
      <section className="strategy-panel">
        <h2>Tyre Strategy</h2>
        <p>Select a driver to view strategy.</p>
      </section>
    );
  }

  return (
    <section className="strategy-panel">
      <h2>Tyre Strategy</h2>

      <h3>{selectedDriver.fullName}</h3>

      {/* Top Info */}
      <div className="strategy-grid">

        <div className="strategy-box">
          <h4>Current Tyre</h4>
          <p>Medium</p>
        </div>

        <div className="strategy-box">
          <h4>Tyre Age</h4>
          <p>16 Laps</p>
        </div>

        <div className="strategy-box">
          <h4>Predicted Pit Window</h4>
          <p>Lap 31-35</p>
        </div>

      </div>

      {/* Recommended Strategies */}
      <div className="recommendations">

        <h3>Recommended Strategies</h3>

        <div className="recommendation-grid">

          <div className="recommendation-card">
            <h4>One Stop</h4>

            <p>
              <strong>Current:</strong> Medium
            </p>

            <p>
              <strong>Pit:</strong> Lap 33
            </p>

            <p>
              <strong>Next Tyre:</strong> Hard
            </p>
          </div>

          <div className="recommendation-card">
            <h4>Two Stop</h4>

            <p>
              <strong>Current:</strong> Medium
            </p>

            <p>
              <strong>Pit 1:</strong> Lap 24 → Medium
            </p>

            <p>
              <strong>Pit 2:</strong> Lap 43 → Soft
            </p>
          </div>

        </div>

      </div>

      {/* Estimated Finish */}
      <div className="position-card">

        <h3>Estimated Finish Position</h3>

        <p>P4</p>

      </div>

    </section>
  );
}

export default StrategyPanel;