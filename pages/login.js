import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import styles from '../styles/Form.module.css'

export default function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		control,
	} = useForm()

	const onSubmit = (data) => {
		const { email, password } = data

		fetch('https://parking-vroom-vroom-api.herokuapp.com/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}).then((response) => console.log(`response`, response))
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Connexion | Vroom vroom</title>
				<link rel='icon' href='/logo-vroom-vroom.png' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Connectez vous</h1>

				<div className={styles.grid}>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						<div className={styles.input}>
							<label htmlFor='email'>E-mail</label>
							<input
								name='email'
								id='email'
								type='text'
								{...register('email')}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor='password'>Mot de passe</label>
							<input
								name='password'
								id='password'
								type='password'
								{...register('password')}
							/>
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
