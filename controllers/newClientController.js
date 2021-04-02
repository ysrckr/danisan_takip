const Client = require('../classes/Client')
const ClientDetails = require('../classes/ClientDetails')

const newClient = (req, res, next) => {
	res.render('newclient', {
		title: 'New Client',
		css: ['main.min.css', 'newclient.min.css'],
		javascript: ['index.js'],
	})
}

const newClientSave = async (req, res, next) => {
	const firstName = req.body.firstName.trim()
	const lastName = req.body.lastName.trim()
	const weight = req.body.weight.trim()
	const height = req.body.height.trim()
	const age = req.body.age.trim()
	const gender = req.body.gender
	const neck = req.body.neck.trim()
	const waist = req.body.waist.trim()
	const hip = req.body.hip.trim()
	const abdomen = req.body.abdomen.trim()
	const activity = req.body.activity
	const dietList = req.body.dietList
	const userId = req.session.user

	try {
		const client = new Client(firstName, lastName, userId)
		const response = await client.createClient()
		req.session.client = response._id
		if (response) {
			const client_id = response._id
			const details = new ClientDetails(
				weight,
				height,
				age,
				gender,
				activity,
				abdomen,
				neck,
				waist,
				hip,
				dietList
			)
			const detailResponse = await details.newDetails(client_id)
			await client.addDetailsId(client_id, detailResponse._id)
			res.status(201)
			res.render('newclient', {
				title: 'New Client',
				css: ['main.min.css', 'newclient.min.css'],
				javascript: ['index.js'],
				client: { firstName: client.firstName, lastName: client.lastName },
			})
		} else {
			res.status(500).json({
				msg: 'Error creating client',
			})
		}
	} catch (err) {
		res.status(500).json(err.message)
	}
}

module.exports = { newClient, newClientSave }
