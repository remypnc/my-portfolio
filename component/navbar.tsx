import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
      <Link href="/">
        <Image 
          src="/my-logo.png"
          alt="Rémy Penichon Logo"
          className={styles.logo}
          width={195}
          height={90}
        />
        </Link>

        <div className={styles.centered}>
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
          <a href="#about">About me</a>
          </li>
          <li>
          <a href="#project">My Projects</a>
          </li>
          <li>
          <a href="#skills">My Skills</a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </div>
  )
}