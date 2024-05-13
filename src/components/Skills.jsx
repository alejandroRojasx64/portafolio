import React from "react";
import styles from "../styles/skills.module.scss";
import { Icon } from "@iconify-icon/react";

const Skills = () => {
  return (
    <>
      <section className={styles.skills}>
        <h2>Habilidades y herramientas</h2>
        <div className={styles.skillsContainer}>
          <span className={styles.icons}>
            <Icon icon="akar-icons:html-fill" />
            <Icon icon="akar-icons:css-fill" />
            <Icon icon="akar-icons:javascript-fill" />
            <Icon icon="fontisto:sass" />
            <Icon icon="simple-icons:react" />
            <Icon icon="cib:git" />
            <Icon icon="devicon-plain:vscode-wordmark" />
            <Icon icon="fontisto:redux" />
          </span>
          <span className={styles.interests}>
            <h3>actualmente aprendiendo:</h3>
            <span className={styles.interestsIcons}>
              <Icon icon="ri:tailwind-css-fill" />
              <Icon icon="akar-icons:typescript-fill" />
            </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Skills;
