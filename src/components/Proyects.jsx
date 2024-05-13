import React from "react";
import styles from "../styles/proyects.module.scss";

const Proyects = () => {
  return (
    <>
      <section className={styles.proyectsContainer}>
        <h2>Proyectos</h2>
        <div className={styles.proyects}>
          <div className={styles.proyect}>
            <img src="../../public/proyect1.jpg" />
            <a>ver en github</a>
          </div>
          <div className={styles.proyect}>
            <img src="../../public/proyect2.jpg" />
            <a>ver en github</a>
          </div>
          <div className={styles.proyect}>
            <img src="../../public/proyect3.jpg" />
            <a>ver en github</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyects;
