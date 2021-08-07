import React, { ReactNode } from 'react'
import MainLayout from 'components/layouts/MainLayout'
import Hero from 'components/molecules/Hero'

const Home = (): ReactNode => {
	return (
		<MainLayout>
			<Hero />
		</MainLayout>
	)
}

export default Home
