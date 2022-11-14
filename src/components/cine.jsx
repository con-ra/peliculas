import logoLlama from '../assets/logo-llama.png';
import '../styles.css';
import Button from 'react-bootstrap/Button';
import Peliculas from './peliculas';

function Cine() {
  const cargarCartelera = () => {
    /* location.href='./components/peliculas.jsx'; */
    /* props.history.pushState('/components/peliculas'); */
  }

  return (
    <>
      <header>
        <nav class="navbar">
          <div class="navbar-menu">
            <h1>LlamaFlix</h1>
          </div>
        </nav>
      </header>

      <section id="home" class="content">
        <article id="logo">
          <img src={logoLlama} alt="" />
        </article>
        <article id="welcome">
          <h2>Más que películas, Historias</h2>
          <Button variant="primary" onClick={Peliculas}>CARTELERA</Button>
          {/* <button onclick="location.href='./peliculas.html'">CARTELERA</button> */}
        </article>
      </section>
    </>
  );
}

export default Cine;
