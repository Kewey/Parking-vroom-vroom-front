import Link from 'next/link'
import React from 'react'
import styles from '../styles/App.module.scss'

export default function Layout({ children }) {
	return (
		<>
			<aside>
				<div className={styles.sidebarMain}>
					<img src='/logo-vroom-vroom.png' height={50} width={50} />
					<h4>
						Parking <br />
						<span>Vroom vroom</span>
					</h4>
				</div>
				<nav>
					<h5>Menu</h5>
					<Link href='/home'>Accueil</Link>
					<Link href='/home/location'>Mes locations</Link>
					<Link href='/home/place'>Mes places</Link>
				</nav>
			</aside>

			<main className={styles.main}>
				<header className={styles.header}>
					<Link href='/home/profil'>Profil</Link>
					<Link href='/login'>Quitter</Link>
				</header>

				<section>{children}</section>

				<footer className={styles.footer}>
					<p>Powered by Tom & Jordan</p>
				</footer>
			</main>
		</>
	)
}
