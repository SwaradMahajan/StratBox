import { useState, useEffect } from "react";
import "./LiveStandings.css";

function LiveStandings() {
  const [standings, setStandings] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [standingsResponse, driversResponse] = await Promise.all([
          fetch("http://localhost:5000/api/standings"),
          fetch("http://localhost:5000/api/drivers"),
        ]);

        const standingsData = await standingsResponse.json();
        const driversData = await driversResponse.json();

        setStandings(standingsData);
        setDrivers(driversData);
      } catch (error) {
        console.error("Error fetching standings:", error);
      }
    };

    fetchData();
  }, []);

  // Don't render anything if there isn't a live race
  if (!standings || standings.length === 0) {
    return null;
  }

  return (
    <div className="live-standings">
      <h2>Live Standings</h2>

      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
          </tr>
        </thead>

        <tbody>
          {standings.map((entry) => {
            const driver = drivers.find(
              (d) => d.number === entry.driver_number
            );

            return (
              <tr key={entry.driver_number}>
                <td>{entry.position}</td>
                <td>{driver ? driver.code : entry.driver_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LiveStandings;