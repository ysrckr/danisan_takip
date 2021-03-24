const validator = require('validator')
const User = require('../classes/User')

const registerController = (req, res, next) => {
	res.render('register', {
		title: 'Welcome to Login',
		mainHeader: 'Register',
		css: ['main.min.css', 'register.min.css'],
		javascript: ['index.js'],
	})
}

const registerValidator = async (req, res, next) => {
	const name = req.body.name.trim()
	const email = req.body.email.trim()
	const password = req.body.password.trim()
	const password2 = req.body.password2.trim()
	try {
		if (
			validator.isEmail(email) &&
			validator.isAlphanumeric(name)
		) {
			if (password == password2) {
				const user = new User(name, email, password)
				const response = await user.createUser()
				if (typeof response !== 'string') {
					res.status(201).json(response)
				} else {
					res.status(403).json(response)
				}
			} else {
				res.status(406).json('Passwords do not match')
			}
		} else {
			res
				.status(406)
				.json(
					'Please make sure your email, name and password in correct format'
				)
		}
	} catch (err) {
		res.status(500).json(err.message)
	}
}

module.exports = { registerController, registerValidator }
