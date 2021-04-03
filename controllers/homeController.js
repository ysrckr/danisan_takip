const ClientSchema = require('../models/Client')
const UserSchema = require('../models/User')

const homeController = async (req, res, next) => {
	const user = await UserSchema.findById(req.session.user)
	const clients = await ClientSchema.find()
		.where('_id')
		.in(user.client_id)
		.exec()
	console.log(clients)
	res.render('home', {
		title: 'Danisan Takip | Welcome',
		css: ['main.min.css', 'home.min.css'],
		javascript: ['index.js'],
		user: { name: user.name },
		clients
	})
}

module.exports = { homeController }
