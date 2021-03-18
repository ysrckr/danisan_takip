const newClient = (req, res, next) => {
	res.render('newclient', {
		title: 'New Client',
		css: ['main.min.css', 'newclient.min.css'],
		javascript: ['index.js'],
	})
}


module.exports = {newClient}