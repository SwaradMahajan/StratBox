import { useState, useEffect } from "react";

import "./DriverSelector.css";
import FLAG_IMAGES from "../../assets/flagImages";
import DRIVER_IMAGES from "../../assets/driverImages";
import { API_URL } from "../../config";

function DriverSelector({
  selectedTeam,
  selectedDriver,
  setSelectedDriver,
}) {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/drivers`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch drivers");
        }

        const data = await response.json();

        setDrivers(data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };

    fetchDrivers();
  }, []);

  const filteredDrivers = drivers.filter(
    (driver) => driver.teamId === selectedTeam
  );

  return (
    <div className="driver-selector">
    <div className="section-header">
        <h2>Select Driver</h2>
        <p>Choose the driver you want to simulate.</p>
    </div>

      {!selectedTeam ? (
        <p>Select a team first.</p>
      ) : (
        <div className="driver-grid">
          {filteredDrivers.map((driver) => {
            const flag = FLAG_IMAGES[driver.countryCode];
            const photo = DRIVER_IMAGES[driver.code];

            return (
              <div
                key={driver.id}
                className={`driver-card ${
                  selectedDriver?.id === driver.id ? "active" : ""
                }`}
                onClick={() => setSelectedDriver(driver)}
              >

                  <img
                      src={photo}
                      alt={driver.fullName}
                      className="driver-photo"
                  />

                  <div className="driver-info">

                      <h3>{driver.fullName}</h3>

                      <div className="driver-meta">

                          <img
                              src={flag}
                              alt={driver.countryCode}
                              className="flag-icon"
                          />

                          <span>#{driver.number}</span>

                      </div>

                  </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DriverSelector;