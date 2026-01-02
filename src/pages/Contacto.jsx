import { useEffect } from "react";
import { setTitle, setDescription } from "../utils/seo";

function Contacto() {
  useEffect(() => {
    setTitle("Contacto | Curius");
    setDescription("Información de contacto del sitio.");
  }, []);

  return (
    <section>
      <h1>Contacto</h1>
      <p>Página de contacto.</p>
    </section>
  );
}

export default Contacto;
