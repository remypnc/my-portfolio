import Head from 'next/head'
import Image from 'next/image'
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
    </>
  )
}
