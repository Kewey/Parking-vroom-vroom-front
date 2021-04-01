import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Form.module.css'

export default function Login() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Connexion | Vroom vroom</title>
				<link rel='icon' href='/logo-vroom-vroom.png' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Connectez vous</h1>

				<div className={styles.grid}>
					<form className={styles.form}>
						<div className={styles.input}>
							<label htmlFor='email'>E-mail</label>
							<input name='email' id='email' type='text' />
						</div>
						<div className={styles.input}>
							<label htmlFor='password'>Mot de passe</label>
							<input name='password' id='password' type='password' />
						</div>
						<button>Connexion</button>
					</form>
				</div>
				<Link href='/create'>Pas de compte ? Inscrivez vous</Link>
			</main>

			<footer className={styles.footer}>
				<p>Powered by Tom & Jordan</p>
			</footer>
		</div>
	)
}
