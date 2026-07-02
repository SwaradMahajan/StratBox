import "./DriverSelector.css";
import drivers from "../../data/drivers";
import FLAG_IMAGES from "../../assets/flagImages";
import countries from "../../data/countries";
import teams from "../../data/teams";

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
                const team = teams.find(
                    (t) => t.id === driver.teamId
                );

                const flag = FLAG_IMAGES[driver.countryCode];

                const countryName = countries[driver.countryCode];
            return (
                <div
                    key={driver.id}
                    className={`driver-card ${
                        selectedDriver?.id === driver.id ? "active" : ""
                    }`}
                    style={{
                        borderColor:
                            selectedDriver?.id === driver.id
                                ? team.color
                                : "#30363d",
                    }}
                    onClick={() => setSelectedDriver(driver)}
                >

                    <div
                        className="driver-accent"
                        style={{ backgroundColor: team.color }}
                    />

                    <img
                        src={driver.photo}
                        alt={driver.fullName}
                        className="driver-photo"
                    />

                    <h3>{driver.fullName}</h3>

                    <div className="driver-country">

                        <img
                            src={flag}
                            alt={countryName}
                            className="flag-icon"
                        />

                        <span>{countryName}</span>

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