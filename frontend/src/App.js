import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Garage from './components/Garage'
import './index.css'
import Login from './components/Login'

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
				<Route path='/login'>
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
