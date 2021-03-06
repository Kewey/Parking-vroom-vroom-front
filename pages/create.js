import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import { useForm } from 'react-hook-form'
import { api } from '../env'

export default function Create() {
	const { register, handleSubmit } = useForm()
	let loading = false
	const onSubmit = (data) => {
		loading = true
		fetch(api + 'users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(() => console.log('logged'))
			.catch((err) => console.log('error', err))
			.finally(() => (loading = false))
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Inscription | Vroom vroom</title>
				<link rel='icon' href='/logo-vroom-vroom.png' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Inscrivez vous</h1>

				<div className={styles.grid}>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.input}>
							<label htmlFor='firstName'>Prénom</label>
							<input {...register('firstName', { required: true })} />
						</div>
						<div className={styles.input}>
							<label htmlFor='lastName'>Nom</label>
							<input {...register('lastName', { required: true })} />
						</div>
						<div className={styles.input}>
							<label htmlFor='email'>E-mail</label>
							<input {...register('email', { required: true })} />
						</div>
						<div className={styles.input}>
							<label htmlFor='password'>Mot de passe</label>
							<input
								type='password'
								{...register('password', { required: true })}
							/>
						</div>
						<button disabled={loading} type='submit'>
							{loading ? 'Chargement' : 'Inscription'}
						</button>
					</form>
					<Link href='/login'>Déjà un compte ? Connectez vous</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<p>Powered by Tom & Jordan</p>
			</footer>
		</div>
	)
}
