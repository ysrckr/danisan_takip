const { client } = require('./clientController')
const UserSchema = require('../models/User')
const User = require('../classes/User')


const homeController = async (req, res, next) => {
	const user = await UserSchema.findById(req.session.user)
	res.render('home', {
		title: 'Danisan Takip | Welcome',
		css: ['main.min.css', 'home.min.css'],
		javascript: ['index.js'],
		user: { name: user.name },
		client
	})
}

module.exports = { homeController }
