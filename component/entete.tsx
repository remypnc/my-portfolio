import React from 'react';
import styles from '@/styles/Entete.module.scss'

const Entete = () => {
  return (
    <div className={styles.background}>
      <div className={styles.yellow_bar} />
      <section className={styles.square}>
        <div className={styles.container}>
          <h3>Hi ! I’m Rémy,<br /> I’m a Web Designer & Developer !</h3>
          <p>I’m a student in IT Technology and I’m passionate by Web Design.</p>
          <div className={styles.space}>
            <a href="/CV_Alternance_Web_Design_Front-end.pdf" download>
              <button style={{ cursor: "pointer" }}>Download CV</button></a>
            <button style={{ cursor: "pointer" }}>Contact Me</button>
          </div>
        </div>
      </section>
      <div className={styles.yellow_bar} />
    </div>
  );
};


export default Entete;
