import "./Dashboard.css";

import Navbar from "../Navbar/Navbar";
import TopSection from "../TopSection/TopSection";
import TeamSection from "../TeamSection/TeamSection";

function Dashboard() {
  return (
    <section className="dashboard">
      <Navbar />

      <TopSection />

      <TeamSection />
    </section>
  );
}

export default Dashboard;