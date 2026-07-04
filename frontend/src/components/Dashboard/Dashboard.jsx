import { useEffect, useState } from "react";


import TopSection from "../../components/TopSection/TopSection";
import StrategyLab from "../../components/StrategyLab/StrategyLab";

import "./Dashboard.css";

function Dashboard() {
  const [raceData, setRaceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRaceData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/race");
        const data = await response.json();

        setRaceData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRaceData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>

      <div className="dashboard">
        <TopSection raceData={raceData} />

        <StrategyLab />
      </div>
    </>
  );
}

export default Dashboard;