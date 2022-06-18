import React from 'react'
import Possibility from './containers/Possibility'
import Features from './containers/Features'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Blog from './containers/Blog'
import What from './containers/What'

import Navbar from './components/Navbar'
import CTA from './components/CTA'
import Brand from './components/Brand'

const App = () => {
	return (
		<div className="app">
			<div className="gradient__bg">
				<Navbar />

				<Header />
			</div>

			<Brand />

			<What />

			<Features />

			<Possibility />

			<CTA />

			<Blog />

			<Footer />
		</div>
	)
}

export default App
