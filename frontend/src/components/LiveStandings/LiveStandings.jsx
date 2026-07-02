import "./LiveStandings.css";

import standings from "../../data/standings";
import drivers from "../../data/drivers";

function LiveStandings() {
  return (
    <div className="live-standings">

      <h2>Live Standings</h2>

      <table>

        <thead>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Tyre</th>
            <th>Gap</th>
          </tr>
        </thead>

        <tbody>

          {standings.map((entry) => {

            const driver = drivers.find(
              (d) => d.id === entry.driverId
            );

            return (
              <tr key={entry.position}>
                <td>{entry.position}</td>
                <td>{driver.code}</td>
                <td>{entry.tyre}</td>
                <td>{entry.gap}</td>
              </tr>
            );

          })}

        </tbody>

      </table>

    </div>
  );
}

export default LiveStandings;