import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/App.module.scss'
import Layout from '../../components/Layout'
import { useForm } from 'react-hook-form'

export default function Index() {

	const { register, handleSubmit, formState : {errors}} = useForm()

	const onSubmit = (data) => console.log(`data`, data)

	return (
		<div className={styles.container}>
			<Head>
				<title>Panneau de control | Vroom vroom</title>
				<link rel='icon' href='/logo-vroom-vroom.png' />

			</Head>

			<Layout>
				<h1>Bonjour Michel,</h1>
				<p>Que voulez vous faire aujourd'hui ?</p>

				<div className={styles.grid23}>
						<div className={styles.card}>
              <h3>J'ai besoin d'une place</h3>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div>
									<label htmlFor="startAt">A partir de</label>
									<input {...register('startAt', {required: 'Il me manque le début de votre location', valueAsDate: true})}  type="date" />
									{errors.startAt && <p>OSKUR</p>}
								</div>
								<div>
									<label htmlFor="endAt">Jusqu'au</label>
									<input {...register('endAt', {required: 'Il me manque la fin de votre location', valueAsDate: true})} type="date" id="endAt" name="endAt"/>
									{errors.endAt && <p>OSKUR</p>}
								</div>
								<button type="submit">
									<p>Rechercher</p>
									<div>
									<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
									</div>
								</button>
							</form>
						</div>
					<Link href="/home/rent">
						<div className={styles.card}>
              <h3>Gérer mes places</h3>
              <p>Ajouter, modifier, et loué vos places disponibles</p>
						</div>
					</Link>
				</div>
			</Layout>
		</div>
	)
}
