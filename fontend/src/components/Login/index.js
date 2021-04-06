import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../redux/user'
import './login.css'

const Login = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	})
	const dispatch = useDispatch()

	const handleInputChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}

	const handleLogin = (e) => {
		e.preventDefault()
		dispatch(loginUser(credentials))
	}

	return (
		<form className='form-container' onSubmit={handleLogin}>
			<input
				type='text'
				placeholder='Email'
				name='email'
				value={credentials.email}
				onChange={handleInputChange}
			/>
			<input
				type='password'
				placeholder='password'
				name='password'
				value={credentials.password}
				onChange={handleInputChange}
			/>
			<button onClick={handleLogin}>login</button>
		</form>
	)
}

export default Login
