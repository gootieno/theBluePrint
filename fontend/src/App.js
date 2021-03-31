import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Garage from './components/Garage'
import './index.css'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route path='/garage'>
					<Garage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
