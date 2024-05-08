import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import styles from "./styles/main.module.scss";
import { Icon } from "@iconify-icon/react";

function App() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.profileContact}>
          <div className={styles.greeting}>
            <img
              className={styles.avatar}
              src="../public/clásico-marco-de-oro-con-trazado-de-recorte.webp"
            />
            <h1>Hola, soy Ale desarrollador web front end</h1>
          </div>
          <div className={styles.contact}>
            <h2>Contactame</h2>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alejandro-rojas-216a87258"
            >
              <Icon icon="devicon:linkedin" />
              <span className={styles.social}>Linkedin</span>
            </a>
            <a target="_blank" href="https://github.com/alejandroRojasx64">
              <Icon icon="icomoon-free:github" />
              <span className={styles.social}>Github</span>
            </a>
            <a>
              <Icon icon="cib:whatsapp" />
              <span className={styles.social}>3705-035504</span>
            </a>

            <form
              action="https://formsubmit.co/alejandrorojasx64@gmail.com"
              method="POST"
              className={styles.sendEmail}
            >
              <label>Enviame un email:</label>
              <input
                className={styles.email}
                type="email"
                placeholder="email"
                name="mail"
                required
              />
              <textarea
                className={styles.message}
                placeholder="mensaje"
                name="mensaje"
                required
              />
              <input className={styles.submit} type="submit" value="Enviar" />
              <input type="hidden" name="_next" value="http://localhost:5173" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
        <div className={styles.aboutMe}>
          <h2>Sobre Mi</h2>
          <p>
            Programador autodidacta y entusiasta de la informática. Me apasionan
            los videojuegos y la informática en general. Desde chico, siempre
            sentí mucha curiosidad por cómo se construían los programas y
            páginas web. Esta curiosidad me llevó a descubrir el mundo de la
            programación, desde entonces quedé completamente fascinado.
            <br />
            <br />
            Me gusta aprender cosas nuevas y tambien disfruto mucho compartiendo
            mis conocimientos con los demas.
          </p>
        </div>
      </section>
      <Skills />
      {/* <Proyects /> */}
    </>
  );
}

export default App;
