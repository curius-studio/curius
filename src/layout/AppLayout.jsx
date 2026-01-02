import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

/**
 * AppLayout
 *
 * Orquesta la estructura global:
 * header + navbar, main y footer.
 * No contiene UI detallada.
 */

function AppLayout({ children }) {
  const navLinks = [
    { label: "Inicio", to: "/" },
    { label: "Contenido", to: "/contenido" },
    { label: "Conócenos", to: "/conocenos" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <>
      <header>
        <Navbar links={navLinks} />
      </header>

      <main id="main-content">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;