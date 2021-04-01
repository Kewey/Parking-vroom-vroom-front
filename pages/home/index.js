import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/App.module.css'
import Image from 'next/image'

export default function Index() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Panneau de control | Vroom vroom</title>
				<link rel='icon' href='/logo-vroom-vroom.png' />

			</Head>

			<sidebar>
				<div className={styles.sidebarMain}>
					<img src="/logo-vroom-vroom.png" height={50} width={50} />
					<h4>Parking <br/><span>Vroom vroom</span></h4>
				</div>
				<nav>
					<h5>Menu</h5>
					<Link href='/home'>Accueil</Link>
					<Link href='/home/location'>Mes locations</Link>
					<Link href='/home/place'>Mes places</Link>
				</nav>
			</sidebar>

			<main className={styles.main}>
				<header className={styles.header}>
					<Link href='/home/profil'>Profil</Link>
					<Link href='/login'>Quitter</Link>
				</header>

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

			<footer className={styles.footer}>
				<p>Powered by Tom & Jordan</p>
			</footer>
			</main>
		</div>
	)
}
