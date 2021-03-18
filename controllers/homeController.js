const { client } = require('./clientController')


const homeController = (req, res, next) => {
	res.render('home', {
		title: 'Danisan Takip | Welcome',
		css: ['main.min.css', 'home.min.css'],
		javascript: ['index.js'],
		user: { name: 'Yasar' },
		client
	})
}

module.exports = { homeController }
