const mongoose = require('mongoose')

const ClientDetailsSchema = new mongoose.Schema({
	weight: {
		type: Number,
		required: true,
	},
	height: {
		type: Number,
		required: true,
	},
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
	basal: {
		type: Number,
	},
	activity: {
		type: Number,
	},
	energyNeed: {
		type: Number,
	},
	abdomen: {
		type: Number,
	},
	neck: {
		type: Number,
	},
	waist: {
		type: Number,
	},
	hip: {
		type: Number,
	},
	bodyFat: {
		type: Number,
	},
	measurement_date: {
		type: Date,
		default: Date.now,
	},
	client_id: 
		{
			type: ObjectId,
			ref: 'Client',
		}
})

module.exports = mongoose.model('ClientDetails', ClientDetailsSchema)
