import React, { useEffect } from 'react'

// eslint-disable-next-line
interface IMainLayout {
	// Define you props if you need it
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	useEffect(() => {
		scrollToTop()
	}, [])

	const scrollToTop = () => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // Chrome - Firefox
	}

	return <>{children}</>
}

export default MainLayout
