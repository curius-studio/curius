/**
 * Core de la aplicación.
 *
 * Define layout + routing explícito.
 */

import { AppLayout } from "../layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Conocenos from "../pages/Conocenos";
import Contacto from "../pages/Contacto";
import BlogList from "../pages/BlogList";
import BlogPost from "../pages/BlogPost";

function AppCore() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="/contenido" element={<BlogList />} />
          <Route path="/contenido/:slug" element={<BlogPost />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default AppCore;
