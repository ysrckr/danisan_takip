const validator = require('validator')
const bcrypt = require('bcryptjs')
const UserSchema = require('../models/User')

const registerController = (req, res, next) => {
	res.render('register', {
		title: 'Welcome to Login',
		mainHeader: 'Register',
		css: ['main.min.css', 'register.min.css'],
		javascript: ['index.js'],
	})
}

const registerValidator = async (req, res, next) => {
	if (
		validator.isEmail(req.body.email) &&
		validator.isAlphanumeric(req.body.name) &&
		validator.isAlphanumeric(req.body.password) &&
		validator.isAlphanumeric(req.body.password2) &&
		req.body.password == req.body.password2
	) {
		let hashed = await bcrypt.hash(req.body.password, 10)
		const user = new UserSchema({
			name: req.body.name,
			email: req.body.email,
			password: hashed,
		})
		const response = await user.save()
		console.log(response)
	}
}

module.exports = { registerController, registerValidator }
