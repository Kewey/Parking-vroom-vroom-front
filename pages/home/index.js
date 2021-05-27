import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/App.module.scss'
import Layout from '../../components/Layout'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs'
import { useState } from 'react'

export default function Index() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		control,
	} = useForm()

	const [search, setSearch] = useState(null)

	const onSubmit = (data) => {
		const { startAt, endAt } = data

		fetch(
			'https://parking-vroom-vroom-api.herokuapp.com/api/available_places?startedAt[before]=' +
				dayjs(startAt).toString() +
				'&finishedAt[after]=' +
				dayjs(endAt).toString()
		).then((response) =>
			console.log(
				`response`,
				response.json().then((res) => {
					console.log(`res`, res)
					setSearch(res['hydra:member'])

					console.log(`search`, search)
				})
			)
		)
	}

	const [startDate, endDate] = watch(['startAt', 'endAt'])

	function rentPlace(selectedPlace) {
		console.log(`dayjs(startAt).toString()`, startAt)
		fetch('https://parking-vroom-vroom-api.herokuapp.com/api/rents', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				place: selectedPlace.place,
				startedAt: dayjs(startDate).toString(),
				finishedAt: dayjs(endDate).toString(),
			}),
		}).then((res) => console.log(`res`, res))
	}

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
								<label htmlFor='startAt'>A partir de</label>
								<Controller
									control={control}
									name='startAt'
									defaultValue={startDate}
									render={({ field: { onChange, onBlur, value } }) => (
										<DatePicker
											id='startAt'
											onChange={onChange}
											onBlur={onBlur}
											selected={value}
											selectsStart
											dateFormat='dd/MM/yyyy'
											className='input'
											placeholderText='Select date'
											minDate={new Date()}
											startDate={startDate}
											endDate={endDate}
										/>
									)}
								/>
								{errors.startAt && <p>{errors.startAt.message}</p>}
							</div>
							<div>
								<label htmlFor='endAt'>Jusqu'au</label>
								<Controller
									control={control}
									name='endAt'
									defaultValue={endDate}
									render={({ field: { onChange, onBlur, value } }) => (
										<DatePicker
											id='endAt'
											onChange={onChange}
											onBlur={onBlur}
											selected={value}
											selectsEnd
											dateFormat='dd/MM/yyyy'
											className='input'
											placeholderText='Select date'
											minDate={new Date()}
											startDate={startDate}
											endDate={endDate}
										/>
									)}
								/>
								{errors.endAt && <p>{errors.endAt.message}</p>}
							</div>
							<button type='submit'>
								<p>Rechercher</p>
								<div>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fas'
										data-icon='angle-right'
										className='svg-inline--fa fa-angle-right fa-w-8'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 256 512'
									>
										<path
											fill='currentColor'
											d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'
										></path>
									</svg>
								</div>
							</button>
						</form>
					</div>
					<Link href='/home/rent'>
						<div className={styles.card}>
							<h3>Gérer mes places</h3>
							<p>Ajouter, modifier, et loué vos places disponibles</p>
						</div>
					</Link>
				</div>

				<section>
					{search?.map((avaiblePlace) => (
						<div key={avaiblePlace.id} className={styles.card}>
							<div className={styles.row}>
								<div>
									<h3>{avaiblePlace.place}</h3>
									<p>
										Disponible du :{' '}
										{dayjs(avaiblePlace.startedAt).format('DD MMMM YYYY', 'fr')}{' '}
										au{' '}
										{dayjs(avaiblePlace.finishedAt).format(
											'DD MMMM YYYY',
											'fr'
										)}
									</p>
								</div>
								<button type='submit' onClick={() => rentPlace(avaiblePlace)}>
									<p>Réserver cette place</p>
								</button>
							</div>
						</div>
					))}
				</section>
			</Layout>
		</div>
	)
}
