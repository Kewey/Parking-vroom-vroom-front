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

          <div className={styles.grid3}>
            <Link href="/home/rent">
              <div className={styles.card}>
              <h3>J'ai une place de disponible</h3>
              <p>Une place de disponible ? Proposez la à vos voisins</p>
              </div>
            </Link>
            <Link href="/home">
              <div className={styles.card}>
              <h3>J'ai besoin d'une place</h3>
              <p>Des amis ou de la famille vous rend visite ? il y a peut etre une place disponible</p>
              </div>
            </Link>
            <Link href="/home">
              <div className={styles.card}>
              <h3>Gérer mes places</h3>
              <p></p>
              </div>
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
