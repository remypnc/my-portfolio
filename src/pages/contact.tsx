import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Navbar from '../../component/navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Contact.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.rectangle}>
            <div className={styles.sidebar}>
              <a id="contact"><h1 className={styles.center}>Contact</h1></a>
            </div>
          <div className={styles.main_content}></div>
          </div>
        </div>
      </main>
    </>
  )
}
