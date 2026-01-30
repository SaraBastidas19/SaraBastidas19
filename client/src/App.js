import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [backgrounds, setBackgrounds] = useState({ inicio: false, contacto: false });

  useEffect(() => {
    const handleScroll = () => {
      if (skillsActive) return;
      const skillsSection = document.getElementById('skills');
      if (!skillsSection) return;
      const distanciaSkills = window.innerHeight - skillsSection.getBoundingClientRect().top;
      if (distanciaSkills >= 300) {
        setSkillsActive(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillsActive]);

  useEffect(() => {
    const preload = (src, key) => {
      const img = new Image();
      img.onload = () => setBackgrounds((prev) => ({ ...prev, [key]: true }));
      img.onerror = () => setBackgrounds((prev) => ({ ...prev, [key]: false }));
      img.src = src;
    };

    preload(`${process.env.PUBLIC_URL}/img/fondo.jpg`, 'inicio');
    preload(`${process.env.PUBLIC_URL}/img/contact_bg.png`, 'contacto');
  }, []);

  const handleSelect = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <div className="contenedor-header">
        <header>
          <div className="logo">
            <a href="#inicio">Sara</a>
          </div>
          <nav id="nav" className={menuVisible ? 'responsive' : ''}>
            <ul>
              <li><a href="#inicio" onClick={handleSelect}>INICIO</a></li>
              <li><a href="#sobremi" onClick={handleSelect}>SOBRE MI</a></li>
              <li><a href="#skills" onClick={handleSelect}>SKILLS</a></li>
              <li><a href="#curriculum" onClick={handleSelect}>CURRICULUM</a></li>
              <li><a href="#portfolio" onClick={handleSelect}>PORTFOLIO</a></li>
              <li><a href="#contacto" onClick={handleSelect}>CONTACTO</a></li>
            </ul>
          </nav>
          <div className="nav-responsive" onClick={() => setMenuVisible((prev) => !prev)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>

      <section
        id="inicio"
        className="inicio"
        style={{
          backgroundImage: backgrounds.inicio
            ? `linear-gradient(to top, rgba(30,35,38,.4), rgba(30,35,38,.7)), url(${process.env.PUBLIC_URL}/img/fondo.jpg)`
            : 'linear-gradient(to top, rgba(30,35,38,.4), rgba(30,35,38,.7))'
        }}
      >
        <div className="contenido-banner">
          <div className="contenedor-img">
            <img
              src="/img/hero.png"
              alt="Foto de perfil"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <h1>Sara Bastidas</h1>
          <h2>Ingeniera de Sistemas e Informática</h2>
          <div className="redes">
            <a href="https://www.instagram.com/codigoparachicas/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/SaraBastidas19" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sarabastidasburgos/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
          <h2>Sobre Mí</h2>
          <p>
            <span>Hola, soy Sara Bastidas.</span> Soy una persona práctica y orientada a cumplir mis objetivos, desde
            hace algunos años me ha llamado mucho la atención aprender sobre programación, me motiva mucho conocer
            cosas nuevas, poder implementarlas y aprender de ellas. Disfruto trabajar en equipo ya que cada persona
            tiene una visión diferente y puedo aprender mucho más, mi enfoque proactivo y mi pasión me han ayudado a
            por el aprendizaje contribuyen al logro de metas y al desarrollar soluciones efectivas para diferentes situa.
          </p>

          <div className="fila">
            <div className="col">
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Email</strong>
                  sarabastidasburgos@gmail.com
                </li>

                <li>
                  <strong>País</strong>
                  Colombia
                </li>
                <li>
                  <strong>Cargo</strong>
                  <span>Software Developer</span>
                </li>
              </ul>
            </div>

            <div className="col">
              <h3>Intereses</h3>
              <div className="contenedor-intereses">
                <div className="interes">
                  <i className="fa-solid fa-gamepad"></i>
                  <span>DEPORTES</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-headphones"></i>
                  <span>PIANO</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-plane"></i>
                  <span>VIAJAR</span>
                </div>
                <div className="interes">
                  <i className="fa-brands fa-apple"></i>
                  <span>IA</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-person-hiking"></i>
                  <span>ANIMALES</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-book"></i>
                  <span>LIBROS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-car"></i>
                  <span>AUTOS</span>
                </div>
                <div className="interes">
                  <i className="fa-solid fa-camera"></i>
                  <span>FOTOS</span>
                </div>
              </div>
            </div>
          </div>
          <button>
            Descargar CV <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
          </button>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="contenido-seccion">
          <h2>Skills</h2>
          <div className="fila">
            <div className="col">
              <h3>Technical Skills</h3>
              <div className="skill">
                <span>Javascript</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'javascript' : ''}`}>
                    <span>75%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>HTML &amp; CSS</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'htmlcss' : ''}`}>
                    <span>89%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Javascript</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'javascript' : ''}`}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Metodologías Agiles</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'metodologias' : ''}`}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Oracle db</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'oracle' : ''}`}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h3>Professional Skills</h3>
              <div className="skill">
                <span>Comunicación</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'comunicacion' : ''}`}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Trabajo en Equipo</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'trabajo' : ''}`}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Creatividad</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'creatividad' : ''}`}>
                    <span>99%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Dedicación</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'dedicacion' : ''}`}>
                    <span>65%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Project Management</span>
                <div className="barra-skill">
                  <div className={`progreso ${skillsActive ? 'proyect' : ''}`}>
                    <span>94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="curriculum">
        <div className="contenido-seccion">
          <h2>Curriculum</h2>
          <div className="fila">
            <div className="col izquierda">
              <h3>Educación</h3>
              <div className="item izq">
                <h4>Arte y Multimedia</h4>
                <span className="casa">Universidad de Oxford</span>
                <span className="fecha">2005 - 2008</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora
                  recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta
                  aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                <div className="conectori">
                  <div className="circuloi"></div>
                </div>
              </div>
              <div className="item izq">
                <h4>Arte y Multimedia</h4>
                <span className="casa">Universidad de Oxford</span>
                <span className="fecha">2005 - 2008</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora
                  recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta
                  aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                <div className="conectori">
                  <div className="circuloi"></div>
                </div>
              </div>
              <div className="item izq">
                <h4>Arte y Multimedia</h4>
                <span className="casa">Universidad de Oxford</span>
                <span className="fecha">2005 - 2008</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora
                  recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta
                  aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                <div className="conectori">
                  <div className="circuloi"></div>
                </div>
              </div>
            </div>

            <div className="col derecha">
              <h3>Experiencia de trabajo</h3>
              <div className="item der">
                <h4>Front Developer</h4>
                <span className="casa">Nombre de Compañía</span>
                <span className="fecha">2005 - 2008</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora
                  recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta
                  aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                <div className="conectord">
                  <div className="circulod"></div>
                </div>
              </div>
              <div className="item der">
                <h4>Front Developer</h4>
                <span className="casa">Nombre de Compañía</span>
                <span className="fecha">2005 - 2008</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora
                  recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta
                  aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                <div className="conectord">
                  <div className="circulod"></div>
                </div>
              </div>
              <div className="item der">
                <h4>Front Developer</h4>
                <span className="casa">Nombre de Compañía</span>
                <span className="fecha">2005 - 2008</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora
                  recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta
                  aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                <div className="conectord">
                  <div className="circulod"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="contenido-seccion">
          <h2>PORTFOLIO</h2>
          <div className="galeria">
            <div className="proyecto">
              <img
                src="/img/p1.jpg"
                alt="Proyecto 1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img
                src="/img/p2.jpg"
                alt="Proyecto 2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img
                src="/img/p3.jpg"
                alt="Proyecto 3"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img
                src="/img/p4.jpg"
                alt="Proyecto 4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img
                src="/img/p5.jpg"
                alt="Proyecto 5"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
            <div className="proyecto">
              <img
                src="/img/p6.jpg"
                alt="Proyecto 6"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="overlay">
                <h3>Diseño Creativo</h3>
                <p>Fotografía</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="contacto"
        style={{
          backgroundImage: backgrounds.contacto
            ? `url(${process.env.PUBLIC_URL}/img/contact_bg.png)`
            : 'none'
        }}
      >
        <div className="contenido-seccion">
          <h2>CONTACTO</h2>
          <div className="fila">
            <div className="col">
              <input type="text" placeholder="Tú Nombre" />
              <input type="text" placeholder="Número telefónico" />
              <input type="text" placeholder="Dirección de correo" />
              <input type="text" placeholder="Tema" />
              <textarea cols="30" rows="10" placeholder="Mensaje"></textarea>
              <button>
                Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </div>
            <div className="col">
              <img
                src="/img/ubicacion.png"
                alt="Ubicación"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="info">
                <ul>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    Nicaragua 159, San Rafael Mza
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile-screen"></i>
                    Llamanos: 2384 - 4343443
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    Email: cw@example.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a href="#inicio" className="arriba">
          <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-skype"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-solid fa-rss"></i></a>
        </div>
      </footer>
    </>
  );
}

export default App;
