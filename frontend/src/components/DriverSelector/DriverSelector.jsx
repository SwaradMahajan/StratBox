import "./DriverSelector.css";
import drivers from "../../data/drivers";
import FLAG_IMAGES from "../../assets/flagImages";
import countries from "../../data/countries";

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
          {filteredDrivers.map((driver) => {
            const flag = FLAG_IMAGES[driver.countryCode];
            const country = countries[driver.countryCode];

            return (
                <div
                key={driver.id}
                className={`driver-card ${
                    selectedDriver?.id === driver.id ? "active" : ""
                }`}
                onClick={() => setSelectedDriver(driver)}
                >
                <img
                    src={driver.photo}
                    alt={driver.fullName}
                    className="driver-photo"
                />

                <h3>{driver.fullName}</h3>

                <div className="driver-meta">
                    <img
                    src={flag}
                    alt={country}
                    className="flag-icon"
                    />

                    <span>{country}</span>
                </div>

                <p className="driver-number">
                    #{driver.number}
                </p>

                </div>
            );
            })}
        </div>
      )}
    </div>
  );
}

export default DriverSelector;