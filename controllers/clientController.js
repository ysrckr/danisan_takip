const client = {
	id: 1,
	firstName: 'Yasar',
	lastName: 'Cakir',
}

const clientController = (req, res, next) => {
	if (req.params.id == client.id) {
		res.render('client', {
			title: `Danisan Takip | ${client.firstName} ${client.lastName}`,
			css: ['main.min.css', 'client.min.css'],
			javascript: ['index.js'],
		})
	} else {
		res.status(404).redirect('/')
	}
}

module.exports = { clientController }
