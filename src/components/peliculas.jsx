import "../styles.css";
import "./peliculas.json";

function Peliculas(props) {
  return (
    <>
      <header>
        <nav class="navbar">
          <div class="navbar-menu">
            <a href="./index.html">
              <h1>LlamaFlix</h1>
            </a>
          </div>
          <div class="div-menu">
            <ul class="menu">
              <li class="menu-item">
                <a href="#sala1">Sala 1</a>
              </li>
              <li class="menu-item">
                <a href="#sala2">Sala 2</a>
              </li>
              <li class="menu-item">
                <a href="#sala3">Sala 3</a>
              </li>
              <li class="menu-item">
                <a href="#sala4">Sala 4</a>
              </li>
              <li class="menu-item">
                <a href="#sala5">Sala 5</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="home" class="content">
        <div class="full-section">
          <h1>Disfrutá las mejores Películas</h1>
          <br />
          <img src="./assets/cine.jpg" alt="" />
        </div>
      </section>

      <section id="sala1" class="sala-content">
        <div class="full-section sala-detail">
          <h2>Sala 1</h2>
        </div>
        <div class="full section sala-title">
          <h3>{props.titulo}</h3>
          <hr />
          <div class="sala-description">
            <div class="sala-poster">
              <img src="./assets/poster_sala1.jpg" />
            </div>
            <div class="sala-resume">
              <p>
                <strong>Resumen: </strong> {props[0].resumen}
              </p>
              <p>
                <strong>Director: </strong> Anthony Russo, Chris Castaldi,
                Edward Catley, Joe Russo, Mark Johnston, Simon Downes
                <br />
                <br />
                <strong>Género: </strong>Acción Aventura Fantasía
                <br />
                <br />
                <strong>Actores: </strong>Alexa Whitaker, Alexandra Rachael
                Rabe, Ami Fujimoto, Angela Bassett, Anthony Mackie, Ava Russo,
                Benedict Cumberbatch, Benedict Wong, Benjamin Weaver, Bradley
                Cooper, Brandon Rush, Brent McGee, Brie Larson, Callan Mulvey,
                otros.
              </p>
              <a
                class="button_view"
                href="https://ww1.cuevana3.me/13310/avengers-endgame"
                target="_blank"
              >
                Ver ahora
              </a>
            </div>
            <div class="sala-critics">
              <p>Críticas</p>
              <br />
              <img src="./assets/critics-sala1.png" />
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="sala2" class="sala-content">
        <div class="full-section sala-detail">
          <h2>Sala 2</h2>
        </div>
        <div class="full section sala-title">
          <h3>La Liga de la Justicia de Zack Snyder</h3>
          <hr />
          <div class="sala-description">
            <div class="sala-poster">
              <img src="./assets/poster_sala2.jpg" />
            </div>
            <div class="sala-resume">
              <p>
                <strong>Resumen: </strong> Decidido a garantizar que el último
                sacrificio de Superman no fuera en vano, Bruce Wayne alinea
                fuerzas con Diana Prince con planes de reclutar un equipo de
                metahumanos para proteger al mundo de una amenaza inminente de
                proporciones catastróficas. La tarea resulta más difícil de lo
                que Bruce imaginaba, ya que cada uno de los reclutas debe
                enfrentarse a los demonios de su propio pasado para trascender
                lo que los ha frenado, permitiéndoles unirse y finalmente formar
                una liga de héroes sin precedentes. Ahora unidos, Batman, Wonder
                Woman, Aquaman, Cyborg y The Flash pueden ser demasiado tarde
                para salvar al planeta de Steppenwolf, DeSaad y Darkseid y sus
                terribles intenciones.
              </p>
              <p>
                <strong>Director: </strong>Kimi Webber, Zack Snyder
                <br />
                <br />
                <strong>Género: </strong>Acción Aventura Fantasía
                <br />
                <br />
                <strong>Actores: </strong>Amber Heard, Amy Adams, Ann Ogbomo,
                Ben Affleck, Billy Crudup, Brooke Ence, Ciarán Hinds, Clem So,
                Connie Nielsen, David Thewlis, Diane Lane, Doutzen Kroes, Ezra
                Miller, Francis Magee, Gal Gadot, Greg Draven, Hari James, Harry
                Lennix, Henry Cavill, J.K. Simmons, Jared Leto, Jason Momoa,
                Jeremy Irons, Jesse Eisenberg.
              </p>
              <a
                class="button_view"
                href="https://ww1.cuevana3.me/39793/zack-snyders-justice-league"
                target="_blank"
              >
                Ver ahora
              </a>
            </div>
            <div class="sala-critics">
              <p>Críticas</p>
              <br />
              <img src="./assets/critics-sala2.png" />
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="sala3" class="sala-content">
        <div class="full-section sala-detail">
          <h2>Sala 3</h2>
        </div>
        <div class="full section sala-title">
          <h3>Joker</h3>
          <hr />
          <div class="sala-description">
            <div class="sala-poster">
              <img src="./assets/poster_sala3.jpg" />
            </div>
            <div class="sala-resume">
              <p>
                <strong>Resumen: </strong> Situada en los años 80'. Un cómico
                fallido es arrastrado a la locura, convirtiendo su vida en una
                vorágine de caos y delincuencia que poco a poco lo llevará a ser
                el psicópata criminal más famoso de Gotham.
              </p>
              <p>
                <strong>Director: </strong> Todd Phillips
                <br />
                <br />
                <strong>Género: </strong> Crimen Drama Thriller
                <br />
                <br />
                <strong>Actores: </strong> Adrienne Lovette, Bill Camp, Brett
                Cullen, Brian Tyree Henry, Bryan Callen, Dante Pereira-Olson,
                Douglas Hodge, Evan Rosado, Frances Conroy, Glenn Fleshler,
                Hannah Gross, Joaquin Phoenix, Jolie Chan, Josh Pais, Leigh
                Gill, Mandela Bellamy, Marc Maron, Mary Kate Malat, Robert De
                Niro, Sharon Washington, Shea Whigham, Zazie Beetz.
              </p>
              <a
                class="button_view"
                href="https://ww1.cuevana3.me/21711/joker"
                target="_blank"
              >
                Ver ahora
              </a>
            </div>
            <div class="sala-critics">
              <p>Críticas</p>
              <br />
              <img src="./assets/critics-sala3.png" />
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="sala4" class="sala-content">
        <div class="full-section sala-detail">
          <h2>Sala 4</h2>
        </div>
        <div class="full section sala-title">
          <h3>Godzilla vs Kong</h3>
          <hr />
          <div class="sala-description">
            <div class="sala-poster">
              <img src="./assets/poster_sala4.jpg" />
            </div>
            <div class="sala-resume">
              <p>
                <strong>Resumen: </strong> Godzilla y Kong, dos de las fuerzas
                más poderosas de un planeta habitado por todo tipo de
                aterradoras criaturas, se enfrentan en un espectacular combate
                que sacude los cimientos de la humanidad. Monarch (Kyle
                Chandler) se embarca en una misión de alto riesgo y pone rumbo
                hacia territorios inexplorados para descubrir los orígenes de
                estos dos titanes, en un último esfuerzo por tratar de salvar a
                dos bestias que parecen tener las horas contadas sobre la faz de
                la Tierra.
              </p>
              <p>
                <strong>Director: </strong> Adam Wingard, Ashley Douglass, Brian
                Avery Galligan, Kerry Lyn McKissick
                <br />
                <br />
                <strong>Género: </strong> Acción Ciencia Ficción Thriller
                <br />
                <br />
                <strong>Actores: </strong> Alexander Skarsgård, Benjamin Rigby,
                Brad McMurray, Bradd Buckley, Brian Tyree Henry, Chris Chalk,
                Conlan Casal, Daniel Nelson, David Castillo, Demián Bichir, Drew
                Walton, Eiza González, Erol Brandis, Hakeem Kae-Kazim, Jim
                Palmer, John Pirruccello, Julian Dennison, Kaylee Hottle, Kei
                Kudo, Kofi Yiadom, Kyle Chandler, Lance Reddick, Millie Bobby
                Brown, Nick Turello, Priscilla Doueihy, Rebecca Hall, Ronny
                Chieng, Shun Oguri, Van Marten, Zhang Ziyi.
              </p>
              <a
                class="button_view"
                href="https://ww1.cuevana3.me/40300/godzilla-vs-kong"
                target="_blank"
              >
                Ver ahora
              </a>
            </div>
            <div class="sala-critics">
              <p>Críticas</p>
              <br />
              <img src="./assets/critics-sala4.png" />
            </div>
          </div>
          <hr />
        </div>
      </section>

      <section id="sala5" class="sala-content">
        <div class="full-section sala-detail">
          <h2>Sala 5</h2>
        </div>
        <div class="full section sala-title">
          <h3>Parasite</h3>
          <hr />
          <div class="sala-description">
            <div class="sala-poster">
              <img src="./assets/poster_sala5.jpg" />
            </div>
            <div class="sala-resume">
              <p>
                <strong>Resumen: </strong> Tanto Gi Taek (Song Kang Ho) como su
                familia están sin trabajo. Cuando su hijo mayor, Gi Woo (Choi
                Woo Shik), empieza a recibir clases particulares en casa de Park
                (Lee Sun Gyun), las dos familias, que tienen mucho en común pese
                a pertenecer a dos mundos totalmente distintos, comienzan una
                interrelación de resultados impresivibles.
              </p>
              <p>
                <strong>Director: </strong> ABong Joon-ho
                <br />
                <br />
                <strong>Género: </strong> Comedia Drama Thriller
                <br />
                <br />
                <strong>Actores: </strong> Andreas Fronk, Anna Elisabeth
                Rihlmann, Chang Hyae-jin, Cho Yeo-jeong, Choi Woo-shik, Jeong
                Ik-han, Jung Hyeon-jun, Jung Ji-so, Jung Yi-seo, Lee Ji-hye, Lee
                Joo-hyung, Lee Jung-eun, Lee Sun-kyun, Park Keun-rok, Park
                Myung-hoon, Park Seo-Joon, Park So-dam, Song Kang-ho.
              </p>
              <a
                class="button_view"
                href="https://ww1.cuevana3.me/20039/gisaengchung"
                target="_blank"
              >
                Ver ahora
              </a>
            </div>
            <div class="sala-critics">
              <p>Críticas</p>
              <br />
              <img src="./assets/critics-sala5.png" />
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
}

export default Peliculas;
