import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

export default function Navbar() {
    return (
    <div>
        <ul className={styles.nav}>
        <Image 
        src="/my-logo.png"
        alt="Rémy Penichon Logo"
        className={styles.logo}
        width={195}
        height={90}
        />
            <li>Home</li>
            <li>About me</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
    </div>
    )
}
