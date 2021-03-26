const newClient = (req, res, next) => {

	res.render('newclient', {
		title: 'New Client',
		css: ['main.min.css', 'newclient.min.css'],
		javascript: ['index.js'],
	
	})
}

const newClientSave = (req, res, next) => {
	console.log(req.body.gender)
}


module.exports = {newClient, newClientSave}