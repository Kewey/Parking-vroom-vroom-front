import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout'
import styles from '../../styles/App.module.scss'

export default function Rent() {
	const { onSubmit } = useForm()

	return (
		<div className={styles.container}>
			<Head>
				<title>Location de place | Vroom vroom</title>
				<link rel='icon' href='/logo-vroom-vroom.png' />
			</Head>

			<Layout>
				<h1>Vous avez une place disponible ?</h1>
				<p>Complétez le formulaire pour proposer votre place à vos voisins.</p>

				<form onSubmit={onSubmit}>
					<div>
						<label htmlFor='number'>Numéro de votre place</label>
						<input type='number' id='number' name='number' />
					</div>
					<div>
						<label htmlFor='residence'>Résidence</label>
						<input type='text' id='residence' name='residence' />
					</div>
					<div>
						<label htmlFor=''>A partir de</label>
						<input type='date' />
					</div>
					<div>
						<label htmlFor=''>Jusqu'au</label>
						<input type='date' />
					</div>
					<button>Louer ma place</button>
				</form>
			</Layout>
		</div>
	)
}
