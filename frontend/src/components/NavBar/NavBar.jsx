import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                Strat<span>Box</span>
            </Link>

            <div className="nav-links">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    RaceHub
                </NavLink>

                <NavLink
                    to="/results"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    Results
                </NavLink>

                <NavLink
                    to="/championship"
                    className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                >
                    Championship
                </NavLink>

            </div>

        </nav>
    );
}

export default Navbar;