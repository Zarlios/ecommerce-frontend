import { NavLink } from "react-router-dom";
import CartModal from "./CartModal";

import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row justify-content-start">
          <li className="nav-item mx-3">
            <NavLink className="nav-link" to="/apparel">
              Apparel
            </NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink className="nav-link" to="/collectibles">
              Collectibles
            </NavLink>
          </li>
        </ul>
        <li className="nav-item justify-content-center">
          <NavLink className="navbar-brand" to="/">
            Matt's Video Game Shop
          </NavLink>
        </li>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <CartModal />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
