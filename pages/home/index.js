import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/App.module.css'

export default function Index() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Panneau de control | Vroom vroom</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className={styles.header}>
				<Link href='/home/profil'>Profil</Link>
				<Link href='/login'>Quitter</Link>
			</header>

			<main className={styles.main}>
				<sidebar>
					<Link href='/home/location'>Mes locations</Link>
					<Link href='/home/place'>Mes places</Link>
				</sidebar>

				<section>
					<h1>Bonjour Michel,</h1>
          <p>Que voulez vous faire aujourd'hui ?</p>

          <div className="grid-3">
            <Link href="/home">
              <>
              <h3>Ajouter une location</h3>
              <p></p>
              </>
            </Link>
            <Link href="/home">
              <>
              <h3></h3>
              <p></p>
              </>
            </Link>
            <Link href="/home">
              <>
              <h3></h3>
              <p></p>
              </>
            </Link>
          </div>
				</section>
			</main>

			<footer className={styles.footer}>
				<p>Powered by Tom & Jordan</p>
			</footer>
		</div>
	)
}
