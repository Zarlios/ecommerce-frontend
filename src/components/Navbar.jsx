import { NavLink } from "react-router-dom";
import CartModal from "./CartModal";

import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav
      className={`navbar border-bottom border-body ${styles.navbar}`}
    >
      <div className="container-fluid">
        <div className="navbar-nav d-flex flex-row justify-content-start">
          <div className="nav-item mx-3">
            <NavLink className="nav-link" to="/apparel">
              Apparel
            </NavLink>
          </div>
          <div className="nav-item mx-3">
            <NavLink className="nav-link" to="/collectibles">
              Collectibles
            </NavLink>
          </div>
        </div>
        <div className="nav-item justify-content-center">
          <NavLink className="navbar-brand" to="/">
            Matt's Video Game Shop
          </NavLink>
        </div>
        <div className="navbar-nav justify-content-end">
          <div className="nav-item">
            <CartModal />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
