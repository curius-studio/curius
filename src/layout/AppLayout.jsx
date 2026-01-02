import { Link } from "react-router-dom";

/**
 * Layout base de la aplicación.
 *
 * Define la estructura semántica global:
 * header, nav, main y footer.
 */

function AppLayout({ children }) {
  return (
    <>
      <header>
        <nav aria-label="Navegación principal">
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

      <main id="main-content">
        {children}
      </main>

      <footer>
        <p>© Curius</p>
      </footer>
    </>
  );
}

export default AppLayout;