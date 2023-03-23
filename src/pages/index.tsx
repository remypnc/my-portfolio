import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from '../../component/navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Entete from '../../component/entete'

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
      <div className={styles.space}>
        <table id="about"><Link href="/about">About me</Link></table>
        <table id="project">My Projects</table>
        <table id="skills">My skills</table>
        <table id="contact">Contact</table>
      </div>
    </>
  )
}
