import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">StratBox</div>

      <div className="nav-links">
        <Link to="/">Live Race</Link>
        <Link to="/results">Previous Results</Link>
        <Link to="/championship">Championship</Link>
      </div>
    </nav>
  );
}

export default Navbar;