import Head from "next/head";
import Image from "next/image";
import React from "react";
import Car from "../../components/car";
import { Inter } from "next/font/google";
import styles from "@/styles/Project.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Project() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.yellow_bar}/>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.rectangle}>
              <a id="project"><h1 className={styles.title}>Projects</h1></a>
              <div className={styles.carouselContainer}>
                <Car />
              </div>
            </div>
          </div>
          <div className={styles.main_content}></div>
        </div>
        <div className={styles.yellow_bar}/>
      </main>
    </>
  );
}
