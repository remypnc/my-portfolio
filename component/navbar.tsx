import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <Image 
          src="/my-logo.png"
          alt="Rémy Penichon Logo"
          className={styles.logo}
          width={195}
          height={90}
        />
        <div className={styles.centered}>
          <li>Home</li>
          <li>About me</li>
          <li>My Projects</li>
          <li>My Skills</li>
          <li>Contact</li>
        </div>
      </ul>
    </div>
  )
}