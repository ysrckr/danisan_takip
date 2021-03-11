const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
    lastName: {
        type: String,
		required: true,
    },
	firstVisit: {
		type: Date,
		default: Date.now,
	},
	user_id: 
		{
			type: ObjectId,
			ref: 'User',
		},
    client_details_id: [
        {
            type: ObjectId,
            ref:'ClientDetails'

        }
    ]
})

module.exports = mongoose.model('Client', ClientSchema)