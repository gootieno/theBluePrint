const express = require('express')
const router = express.Router()

const apiRouter = require('./api')

router.use('/api', apiRouter)

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler')
const { setTokenCookie } = require('../../utils/auth.js')
const { User } = require('../../db/models')
router.get(
	'/set-token-cookie',
	asyncHandler(async (req, res) => {
		const user = await User.findOne({
			where: {
				username: 'Demo-lition',
			},
		})
		setTokenCookie(res, user)
		return res.json({ user })
	})
)

//test route for xsrf token
router.get('/hello/world', (req, res) => {
	res.cookie('XSRF-TOKEN', req.csrfToken())
	res.send('Hello World')
})

module.exports = router
