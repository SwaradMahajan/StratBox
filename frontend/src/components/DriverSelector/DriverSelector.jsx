import "./DriverSelector.css";
import drivers from "../../data/drivers";

function DriverSelector({
  selectedTeam,
  selectedDriver,
  setSelectedDriver,
}) {
  const filteredDrivers = drivers.filter(
    (driver) => driver.teamId === selectedTeam
  );

  return (
    <div className="driver-selector">
      <h2>Select Driver</h2>

      {!selectedTeam ? (
        <p>Select a team first.</p>
      ) : (
        <div className="driver-grid">
          {filteredDrivers.map((driver) => (
            <div
              key={driver.id}
              className={`driver-card ${
                selectedDriver === driver.id ? "active" : ""
              }`}
              onClick={() => setSelectedDriver(driver.id)}
            >
              <h3>{driver.fullName}</h3>
              <p>{driver.code}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DriverSelector;