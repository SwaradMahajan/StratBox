import { useState } from "react";

import TeamSelector from "../TeamSelector/TeamSelector";
import DriverSelector from "../DriverSelector/DriverSelector";
import StrategyResult from "../StrategyResult/StrategyResult";

import "./StrategyLab.css";

function StrategyLab() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const [currentTyre, setCurrentTyre] = useState("Medium");
  const [tyreAge, setTyreAge] = useState(20);
  const [lapsRemaining, setLapsRemaining] = useState(20);
  const [gapAhead, setGapAhead] = useState(2.0);
  const [gapBehind, setGapBehind] = useState(25.0);
  const [weather, setWeather] = useState("Dry");
  const [safetyCar, setSafetyCar] = useState(false);

  const [strategy, setStrategy] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateStrategy = async () => {
    if (!selectedDriver) {
      alert("Please select a driver.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/strategy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driverId: selectedDriver.id,
          type: currentTyre,
          tyreAge,
          lapsRemaining,
          gapAhead,
          gapBehind,
          weather,
          safetyCar,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate strategy");
      }

      const data = await response.json();

      setStrategy(data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate strategy.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="strategy-lab">

      <h1>Strategy Simulator</h1>

      <TeamSelector
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />

      <DriverSelector
        selectedTeam={selectedTeam}
        selectedDriver={selectedDriver}
        setSelectedDriver={setSelectedDriver}
      />

      <div className="lab-inputs">

        <label>Current Tyre</label>

        <select
          value={currentTyre}
          onChange={(e) => setCurrentTyre(e.target.value)}
        >
          <option>Soft</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <label>Tyre Age (laps)</label>

        <input
          type="number"
          min="0"
          value={tyreAge}
          onChange={(e) => setTyreAge(Number(e.target.value))}
        />

        <label>Laps Remaining</label>

        <input
          type="number"
          min="1"
          value={lapsRemaining}
          onChange={(e) => setLapsRemaining(Number(e.target.value))}
        />

        <label>Gap Ahead (seconds)</label>

        <input
          type="number"
          step="0.1"
          value={gapAhead}
          onChange={(e) => setGapAhead(Number(e.target.value))}
        />

        <label>Gap Behind (seconds)</label>

        <input
          type="number"
          step="0.1"
          value={gapBehind}
          onChange={(e) => setGapBehind(Number(e.target.value))}
        />

        <label>Weather</label>

        <select
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        >
          <option>Dry</option>
          <option>Wet</option>
        </select>

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={safetyCar}
            onChange={(e) => setSafetyCar(e.target.checked)}
          />

          Safety Car Deployed
        </label>

        <button
          onClick={generateStrategy}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Strategy"}
        </button>

      </div>

      {strategy && (
        <StrategyResult
          strategy={strategy}
          driverName={selectedDriver?.fullName}
        />
      )}

    </div>
  );
}

export default StrategyLab;