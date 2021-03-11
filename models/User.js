const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
	},
})
