import Head from 'next/head'
import React from 'react'
import Navbar from '../../components/navbar'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Entete from '../../components/entete'
import Footer from '../../components/footer'
import About from './about'
import Project from './project'
import Skills from './skills'
import Contact from './contact'

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
        <About />
        <Project />
        <Skills />
        <Contact />
        
        <Footer/>
      </main>
      
    </>
  )
}
