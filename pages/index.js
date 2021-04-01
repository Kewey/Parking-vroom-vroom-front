import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Vroom vroom</title>
				<link rel='icon' href='/logo-vroom-vroom.png' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Bienvenue sur Vroom vroom</h1>

				<p className={styles.description}>
					Le gestionnaire de place de parking
				</p>

				<div className={styles.grid}>
					<Link href='/login'>
						<div className={styles.card}>
							<h3>Connexion &rarr;</h3>
							<p>Accédez à votre espace et gerez vos places de parking.</p>
						</div>
					</Link>

					<Link href='/create'>
						<div className={styles.card}>
							<h3>Inscription &rarr;</h3>
							<p>Créez votre espace et gerez vos places de parking.</p>
						</div>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<p>Powered by Tom & Jordan</p>
			</footer>
		</div>
	)
}
