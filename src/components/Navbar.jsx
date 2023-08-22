import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row justify-content-start">
          <li className="nav-item me-5">
            <NavLink className="navbar-brand" to="/">
              Matt's Video Game Shop
            </NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink className="nav-link" to="/apparel">
              Apparel
            </NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink className="nav-link" to="/collictables">
              Collectibles
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
