import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../../component/navbar";
import { Inter } from "next/font/google";
import styles from "@/styles/Contact.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.background}>
          <div className={styles.contact}>
            <h2>Contact</h2>
            <div className={styles.contact_information}>
              <ul>
                <li>
                  <img src="../photo.jpg" />
                  <a href="#"> @remy_pnc</a>
                </li>
                <li>
                  <img src="../photo.jpg" />
                  <a href="#"> Rémy PENICHON</a>
                </li>
                <li>
                  <img src="../photo.jpg" />
                  <a href="tel:0614460516"> 06 14 46 05 16</a>
                </li>
                <li>
                  <img src="../photo.jpg" />
                  <div>
                    <a href="mailto:penich_r@etna-alternance.net">
                      {" "}
                      penich_r@etna-alternance.net
                    </a>
                    <a
                      className={styles.gray}
                      href="mailto:rpenichon18@gmail.com"
                    >
                      ( rpenichon18@gmail.com )
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.img} />
        </div>

        <div className={styles.yellow_bar} />
      </main>
    </>
  );
}
