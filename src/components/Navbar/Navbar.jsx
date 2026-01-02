/**
 * Navbar (esqueleto técnico)
 *
 * Renderiza navegación a partir de props.
 * No decide rutas ni maneja estado.
 */

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ links }) {
  return (
    <nav aria-label="Navegación principal" className="navbar">
      <ul className="navbar__list">
        {links.map(({ label, to }) => (
          <li key={to} className="navbar__item">
            <Link to={to} className="navbar__link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
