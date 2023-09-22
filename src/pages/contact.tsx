import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Contact.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div id="contact" className={styles.background}>
          <div className={styles.contact}>
            <h2>Contact</h2>
            <div className={styles.contact_information}>
              <ul>
                <li>
                  <img src="../IC/instagram.png" />
                  <a href="https://www.instagram.com/remy_pnc/"> @remy_pnc</a>
                </li>
                <li>
                  <img src="../IC/linkedin.png" />
                  <a href="https://www.linkedin.com/in/r%C3%A9my-penichon-7a5bab252/"> Rémy PENICHON</a>
                </li>
                <li>
                  <img src="../IC/whatsapp.png" />
                  <a href="tel:0614460516"> 06 14 46 05 16</a>
                </li>
                <li>
                  <img src="../IC/mail.png" />
                  <div>
                    <a href="mailto:penich_r@etna-alternance.net">
                      {" "}
                      penich_r@etna-alternance.net
                    </a>
                    <a
                      className={styles.gray}
                      href="mailto:rpenichon18@gmail.com"
                    >
                      (rpenichon18@gmail.com)
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
