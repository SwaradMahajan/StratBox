import "./StrategyPanel.css";
import strategyData from "../../data/strategyData";

function StrategyPanel({ selectedDriver }) {
  const strategy = selectedDriver
    ? strategyData[selectedDriver.id]
    : null;

  if (!selectedDriver || !strategy) {
    return (
      <div className="strategy-panel">
        <h2>Tyre Strategy</h2>
        <p>Select a driver to view strategy.</p>
      </div>
    );
  }

  return (
    <div className="strategy-panel">
      <h2>Tyre Strategy</h2>

      <h3>{selectedDriver.fullName}</h3>

      <div className="strategy-grid">

        <div className="strategy-box">
          <h4>Current Tyre</h4>
          <p>{strategy.currentTyre}</p>
        </div>

        <div className="strategy-box">
          <h4>Tyre Age</h4>
          <p>{strategy.tyreAge} Laps</p>
        </div>

        <div className="strategy-box">
          <h4>Predicted Pit Window</h4>
          <p>
            Lap {strategy.pitWindow.start}-{strategy.pitWindow.end}
          </p>
        </div>

      </div>

      <h3 className="strategy-title">
        Recommended Strategies
      </h3>

      <div className="recommendation-grid">

        <div className="recommendation-card">
          <h4>One Stop</h4>

          <p>
            <strong>Current:</strong> {strategy.currentTyre}
          </p>

          <p>
            <strong>Pit:</strong> Lap{" "}
            {strategy.recommendedStrategies.oneStop.pitLap}
          </p>

          <p>
            <strong>Next Tyre:</strong>{" "}
            {strategy.recommendedStrategies.oneStop.nextTyre}
          </p>
        </div>

        <div className="recommendation-card">
          <h4>Two Stop</h4>

          <p>
            <strong>Current:</strong> {strategy.currentTyre}
          </p>

          <p>
            <strong>Pit 1:</strong> Lap{" "}
            {strategy.recommendedStrategies.twoStop[0].pitLap}
            {" → "}
            {strategy.recommendedStrategies.twoStop[0].nextTyre}
          </p>

          <p>
            <strong>Pit 2:</strong> Lap{" "}
            {strategy.recommendedStrategies.twoStop[1].pitLap}
            {" → "}
            {strategy.recommendedStrategies.twoStop[1].nextTyre}
          </p>
        </div>

      </div>

      <div className="prediction-box">
        <h3>Estimated Finish Position</h3>

        <h1>P{strategy.predictedFinish}</h1>
      </div>
    </div>
  );
}

export default StrategyPanel;