import "./Dashboard.css";

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import TopSection from "../TopSection/TopSection";
import TeamSection from "../TeamSection/TeamSection";
import StrategyPanel from "../StrategyPanel/StrategyPanel";

function Dashboard() {
  return (
    <section className="dashboard">

      <DashboardHeader />

      <TopSection />

      <TeamSection />

      <StrategyPanel />

    </section>
  );
}

export default Dashboard;