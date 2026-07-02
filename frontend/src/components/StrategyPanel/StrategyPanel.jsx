import "./StrategyPanel.css";
import strategyData from "../../data/strategyData";

function tyreBadge(tyre) {
  switch (tyre) {
    case "Soft":
      return <span className="tyre soft">SOFT</span>;

    case "Medium":
      return <span className="tyre medium">MEDIUM</span>;

    case "Hard":
      return <span className="tyre hard">HARD</span>;

    default:
      return <span>{tyre}</span>;
  }
}

function StrategyPanel({ selectedDriver }) {
  if (!selectedDriver) {
    return (
      <div className="strategy-panel">
        <h2>Tyre Strategy</h2>
        <p>Select a driver to view strategy.</p>
      </div>
    );
  }

  const strategy = strategyData[selectedDriver.id];

  if (!strategy) {
    return (
      <div className="strategy-panel">
        <h2>Tyre Strategy</h2>
        <p>No strategy data available.</p>
      </div>
    );
  }

  return (
    <div className="strategy-panel">

      <h2>Tyre Strategy</h2>

      <h3>{selectedDriver.fullName}</h3>

      {/* Current Tyre */}

      <div className="current-tyre">

        <h4>Current Compound</h4>

        {tyreBadge(strategy.currentTyre)}

        <p>Age: {strategy.tyreAge} laps</p>

      </div>

      {/* Strategy Cards */}

      <div className="strategy-cards">

        <div className="strategy-card recommended">

          <h4>⭐ Recommended</h4>

          <h3>One Stop</h3>

          <p><strong>Pit Lap:</strong> {strategy.oneStop.pitLap}</p>

          <p>
            <strong>Next Tyre:</strong>{" "}
            {tyreBadge(strategy.oneStop.nextTyre)}
          </p>

          <p><strong>Finish:</strong> {strategy.oneStop.finish}</p>

        </div>

        <div className="strategy-card">

          <h4>Alternative</h4>

          <h3>Two Stop</h3>

          <p>
            <strong>Pit 1:</strong> Lap {strategy.twoStop.firstPit}
          </p>

          <p>
            <strong>Tyre:</strong>{" "}
            {tyreBadge(strategy.twoStop.firstTyre)}
          </p>

          <hr />

          <p>
            <strong>Pit 2:</strong> Lap {strategy.twoStop.secondPit}
          </p>

          <p>
            <strong>Tyre:</strong>{" "}
            {tyreBadge(strategy.twoStop.secondTyre)}
          </p>

          <p><strong>Finish:</strong> {strategy.twoStop.finish}</p>

        </div>

      </div>

    </div>
  );
}

export default StrategyPanel;