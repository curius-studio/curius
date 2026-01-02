import { useEffect } from "react";
import { setTitle, setDescription } from "../utils/seo";

function Conocenos() {
  useEffect(() => {
    setTitle("Conócenos | Curius");
    setDescription("Información sobre Curius y su propósito.");
  }, []);

  return (
    <section>
      <h1>Conócenos</h1>
      <p>Página institucional.</p>
    </section>
  );
}

export default Conocenos;
