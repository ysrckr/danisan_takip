const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const ClientSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	no: { type: Number },
	firstVisit: {
		type: Date,
		default: Date.now,
	},
	user_id: {
		type: mongoose.ObjectId,
		ref: 'User',
	},
	client_details_id: [
		{
			type: mongoose.ObjectId,
			ref: 'ClientDetails',
		},
	],
})

ClientSchema.plugin(AutoIncrement, { inc_field: 'no' })
module.exports = mongoose.model('Client', ClientSchema)
