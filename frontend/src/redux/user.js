import { csrfFetch } from './csrf'

const USER_ADDED = 'users/USER_ADDED'
const USER_REMOVED = 'users/USER_REMOVED'

const addUser = (userObj) => ({
	type: USER_ADDED,
	user: userObj,
})

const removeUser = () => ({
	type: USER_REMOVED,
})

export const restoreUser = () => async (dispatch) => {
	const response = await csrfFetch('/api/session')
	const data = await response.json()
	dispatch(addUser(data.user))
	return response
}

export const loginUser = ({ email, password }) => async (dispatch) => {
	const response = await csrfFetch('/api/session', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	})
	if (!response.ok) throw response
	const user = await response.json()
	dispatch(addUser(user))
}

const userReducer = (state = null, action) => {
	switch (action.type) {
		case USER_ADDED:
			return {
				...state,
				[action.user.id]: action.user,
			}
		case USER_REMOVED:
			return null
		default:
			return state
	}
}

export default userReducer
