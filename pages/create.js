import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Form.module.css'
import { useForm } from 'react-hook-form'
import { api } from '../env'

export default function Create() {
	const { register, handleSubmit } = useForm()
	let loading = false
	const onSubmit = (data) => {
		console.log(`data`, data)
		loading = true
		fetch(api + 'users', { method: 'POST', body: data })
			.then(() => console.log('logged'))
			.catch((err) => console.log('error', err))
			.finally(() => (loading = false))
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Inscription | Vroom vroom</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Inscrivez vous</h1>

				<div className={styles.grid}>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.input}>
							<label htmlFor='firstName'>Prénom</label>
							<input
								name='firstName'
								id='firstName'
								type='text'
								ref={register({ required: true })}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor='lastName'>Nom</label>
							<input
								name='lastName'
								id='lastName'
								type='text'
								ref={register({ required: true })}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor='email'>E-mail</label>
							<input
								name='email'
								id='email'
								type='text'
								ref={register({ required: true })}
							/>
						</div>
						<div className={styles.input}>
							<label htmlFor='password'>Mot de passe</label>
							<input
								name='password'
								id='password'
								type='password'
								ref={register({ required: true })}
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
