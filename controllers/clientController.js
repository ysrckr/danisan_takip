const clientController = (req, res, next) => {
	if (req.params.id) {
		res.render('client', {
			title: `Danisan Takip | ${req.params.id}`,
			css: ['main.min.css', 'client.min.css'],
			javascript: ['index.js'],
			
		})
	} else {
		res.status(404).redirect('/')
	}
}
module.exports = { clientController }
