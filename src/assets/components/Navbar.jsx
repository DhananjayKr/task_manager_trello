import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isLoggedin, setIsloggedIn] = useState(false);
  const location = useLocation();
  const isLogin = location.pathname === "/" || location.pathname === "/login";

  return (
    <div className="navbar">
      <div className="icon">
        <NavLink to="/login" exact>
          🗒️
        </NavLink>
      </div>
      {isLoggedin ? (
        <button className="logout-button">Logout</button>
      ) : (
        <div className="links">
          <NavLink
            to="/login"
            exact
            className={({ isActive }) =>
              isActive || isLogin ? "active-link" : ""
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Signup
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
