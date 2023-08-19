import React from 'react'
import styles from '../styles/header.module.css'
import Link from 'next/link'

const links = [
    {
        label: 'Home',
        route: '/'
    }, 
    {
        label: 'Posts',
        route: '/posts'
    },
    {
        label: 'Shop',
        route: '/shop'
    },
    {
        label: 'No Shop',
        route: '/noshop'
    }
  ]

function Navigation() {
  return (
    <header className={`${styles.headerContainer}`}>    
        <nav className={styles.navigation}>
            {links.map(link => (
                <Link href={link.route}>{link.label}</Link>
            ))}
        </nav>
    </header>
  )
}

export default Navigation
