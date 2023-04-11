import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Skills.module.css'

export default function Skills() {
  return (
    <>
      <Head>
      <link rel="icon" href="/icon.ico" />
      </Head>

      <main className={styles.main}>
      <a id="skills"><h1 className={styles.title}>Skills</h1></a> 
      <div className={styles.yellow_bar}/>
        <div className={styles.container}>
            <div className={styles.rectangle}>
              <div className={styles.main_content}>
                <h2 className={styles.center}>Front-end</h2>
              </div>
            <div className={styles.yellow_bar}/>
            </div>
          </div>
      </main>
    </>
  )
}
