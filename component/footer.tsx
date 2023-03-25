import React from 'react';
import styles from '@/styles/Home.module.css'

export default function Footer() {
    return (
    <div>
    <div className={styles.topFooter}></div>
    <footer className={styles.container}>
      <div className={styles.box}>
        <h4 className={styles.title}>
          <p className={styles.sectionTitle}>About me</p>
          <ul className={styles.list}>
            <li>Studies</li>
            <li>Hobbies</li>
            <li>Experience</li>
            <li>Personality</li>
          </ul></h4>
          <hr className={styles.sectionSeparator}/>
        <h4 className={styles.title}>
          <p className={styles.sectionTitle}>My projects</p>
          <ul className={styles.list}>
            <li>Portfolio 2023</li>
            <li>Codecamp ETNA</li>
            <li>Eco Score</li>
            <li>Beep-Boop Store</li>
          </ul></h4>
          <hr className={styles.sectionSeparator}/>
        <h4 className={styles.title}>
          <p className={styles.sectionTitle}>My skills</p>
          <ul className={styles.list}>
            <li>Figma</li>
            <li>HTML / CSS</li>
            <li>Typescript (React.js)</li>
            <li>Adobe</li>
          </ul></h4>
          <hr className={styles.sectionSeparator}/>
        <h4 className={styles.title}>
          <p className={styles.sectionTitle}>Contact</p>
          <ul className={styles.list}>
            <li><a href="https://github.com/remypnc">@remy_pnc</a></li>
            <li><a href="https://www.linkedin.com/in/r%C3%A9my-penichon-7a5bab252/">Rémy Penichon</a></li>
            <li>06 14 46 05 16</li>
            <li>penich_r@etna-alternance.net</li>
          </ul></h4>
     </div>
     </footer>
        <div className={styles.copyRightText}>
          © Copyright {new Date().getFullYear()} Rémy PENICHON. All rights reserved.
          Help by <a href='https://panda-evan.github.io'>Evan Quinchon</a>
        </div>
    </div>
  );
}
