import { useEffect } from "react";
import { setTitle, setDescription } from "../utils/seo";

function Home() {
  useEffect(() => {
    setTitle("Inicio | Curius");
    setDescription("Página principal del sitio Curius.");
  }, []);
  
  return (
    <section>
      <h1>Home</h1>
      <p>Página de inicio.</p>
    </section>
  );
}

export default Home;
