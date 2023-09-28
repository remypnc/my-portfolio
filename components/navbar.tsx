import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <div>
          <a href="/">
            <img
              className={styles.logo}
              src="/my-logo.png"
              alt="Rémy Penichon Logo"
            />
          </a>
        </div>

        <div className={styles.centered}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#project">My Projects</a>
          </li>
          <li>
            <a href="#skills">My Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </div>
  );
}
