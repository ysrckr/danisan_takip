const clientController = (req, res, next) => {
	let i = req.params.id - 1
	if (req.params.id == client[i].id) {
		res.render('client', {
			title: `Danisan Takip | ${client[i].firstName} ${client[i].lastName}`,
			css: ['main.min.css', 'client.min.css'],
			javascript: ['index.js'],
			client: client[i],
		})
	} else {
		res.status(404).redirect('/')
	}
}
module.exports = { clientController }
