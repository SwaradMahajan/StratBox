import "./LiveStandings.css";

import standings from "../../data/standings";

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

          {standings.map((driver) => (
            <tr key={driver.position}>
              <td>{driver.position}</td>
              <td>{driver.driver}</td>
              <td>{driver.tyre}</td>
              <td>{driver.gap}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default LiveStandings;