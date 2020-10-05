import React, { Component } from 'react'

import Navbar from '../navbar/navbar'
import ProductContainer from '../containers/productcontainer'
import Footer from '../footer/footer'


class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<ProductContainer />
				<Footer />
			</div>
		)
	}
}

export default App
