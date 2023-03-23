import React from 'react';
import styles from '@/styles/Entete.module.scss'

const Entete = () => {
  return (
    <div 
    className={styles.background}
    >
      <div className={styles.yellow_bar}/>
      <section className={styles.square}>
        <div className={styles.container}>
            <h3>Hi ! I’m Rémy,<br/> I’m a Web Developper !</h3>
            <p>I’m a student in IT Technology and I’m passionate by Web Design.</p>
            <div>
                <button>Download CV</button>
                <button>Contact Me</button>
            </div>
            
        </div>
        
      </section>
      <div className={styles.yellow_bar}/>
    </div>
  );
};

export default Entete;
