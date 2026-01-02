import BotonSolido from "../components/BotonSolido/BotonSolido";

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Página de inicio (contenido provisional).</p>

      <BotonSolido
        texto="Framework"
        badge="new"
        modo="oscuro"
        style={{ padding: '10px 14px' }}
        onClick={() => console.log('click')}
      />
    </section>
  );
}

export default Home;
