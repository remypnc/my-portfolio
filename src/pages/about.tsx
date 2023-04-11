import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
      <div className={styles.yellow_bar}/>
        <a id="about"><h1 className={styles.center}>About Me</h1></a>
        <div className={styles.container}>
          <div className={styles.image} />
          <div className={styles.text}>
            <p>
              Thanks for your interest, here is a quick story of me and this
              website.
              <br />
              My name is Rémy Penichon and I’m a very creative person who is
              passionnate by Web Design.
              <br />
              I do my work mainly on Figma and it's one of my stronger section.
              <br />
              Besides these I know Web Development (HTML/CSS), LINUX and
              database as well.
              <br />
              This website is basically one of my Web Development project which
              is built using.
            </p>
          </div>
        </div>
        <div className={styles.yellow_bar}/>
      </main>
    </>
  );
}
