const validator = require('validator')
const User = require('../classes/User')

const loginController = (req, res, next) => {
	res.render('login', {
		title: 'Welcome to Login',
		mainHeader: 'Login',
		css: ['main.min.css', 'login.min.css'],
		javascript: ['index.js'],
	})
}

const loginValidator = async (req, res, next) => {
	if (
		validator.isEmail(req.body.email) &&
		validator.isAlphanumeric(req.body.password)
	) {
		const user = new User()
		const response = await user.findUserByEmail(
			req.body.email,
			req.body.password
		)
		if (typeof response !== 'string') {
			res.status(200).json(response)
		} else {
			res.status(401).json(response)
		}
	} else {
		res.json('please enter email and password')
	}
}

module.exports = { loginController, loginValidator }
