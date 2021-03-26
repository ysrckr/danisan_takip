const validator = require('validator')
const User = require('../classes/User')

const loginController = (req, res, next) => {
	if(req.session.user) {
		res.redirect('/')
	} else {
		res.render('login', {
			title: 'Welcome to Login',
			mainHeader: 'Login',
			css: ['main.min.css', 'login.min.css'],
			javascript: ['index.js'],
		})
	}
	
}

const loginValidator = async (req, res, next) => {
	const email = req.body.email.trim()
	const password = req.body.password.trim()
	try {
		if (validator.isEmail(email) && validator.isAlphanumeric(password)) {
			const user = new User()
			const response = await user.findUserByEmail(email, password)
			if (typeof response !== 'string') {
				req.session.user = response._id
				res.redirect('/')

			} else {
				res.status(401).json(response)
			}
		} else {
			res.json('please enter email and password')
		}
	} catch (err) {
		res.status(500).json(err.message)
	}
}

module.exports = { loginController, loginValidator }
