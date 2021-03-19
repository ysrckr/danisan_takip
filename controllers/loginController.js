const validator = require('validator')
const bcrypt = require('bcryptjs')
const UserSchema = require('../models/User')

const loginController = (req, res, next) => {
	res.render('login', {
		title: 'Welcome to Login',
		mainHeader: 'Login',
		css: ['main.min.css', 'login.min.css'],
		javascript: ['index.js'],
	})
}

const loginValidator = async (req,res,next) => {
	if (validator.isEmail(req.body.email) && validator.isAlphanumeric(req.body.password)) {
		const user = await UserSchema.findOne({email: req.body.email})
		if ( await bcrypt.compare(req.body.password, user.password)) {
			res.json('Logged in')
		} else {
			res.json('Wronggg')
		}
	} else {
		res.json('please enter email and password')
	}
}

module.exports = {loginController, loginValidator}