const router = require('express').Router()
const { restoreUser } = require('../../utils/auth.js')

const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')

router.use('/session', sessionRouter)

router.use('/users', usersRouter)

router.get('/restore-user', restoreUser, (req, res) => {
	return res.json(req.user)
})

router.post('/test', (req, res) => {
	res.json({ requestBody: req.body })
})

module.exports = router
