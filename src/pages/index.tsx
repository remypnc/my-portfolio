import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../../component/navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Entete from '../../component/entete'
import Footer from '../../component/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Navbar />
        <Entete />
      </main>
      <div className={styles.title}>
        <li className={styles.about} id="about"><Link href="/about">About me</Link></li>
        <p></p>
        <div className={styles.yellow_bar}/>
        <li className={styles.title} id="project">My Projects</li>
        <li className={styles.title} id="skills">My skills</li>
        <li className={styles.title} id="contact">Contact</li>
      </div>
      <Footer/>
    </>
  )
}
