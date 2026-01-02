/**
 * Layout base de la aplicación.
 *
 * Define la estructura visual global:
 * - Navbar
 * - Contenido principal
 * - Footer
 *
 * No contiene lógica de negocio ni estilos finales.
 */

import { Link } from "react-router-dom";

function AppLayout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contenido">Contenido</Link>
            </li>
            <li>
              <Link to="/conocenos">Conócenos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        {/* Footer placeholder */}
      </footer>
    </div>
  );
}

export default AppLayout;
