const ClientSchema = require('../models/Client')
const UserSchema = require('../models/User')

class Client {
	constructor(firstName, lastName, userId) {
		;(this.firstName = firstName),
			(this.lastName = lastName),
			(this.userId = userId)
	}

	async createClient() {
		try {
			if (this.firstName && this.lastName && this.userId) {
				this.client = new ClientSchema({
					firstName: this.firstName,
					lastName: this.lastName,
					user_id: this.userId,
				})
			} else {
				return 'Please fill all necessary fields'
			}
			const clientSaved = await this.client.save()

			await UserSchema.updateOne(
				{ _id: this.client.user_id },
				{ $push: { client_id: this.client._id } }
			)
			return clientSaved
		} catch (err) {
			const errMsg = err.message
			return errMsg
		}
	}
	async addDetailsId(id, details_id) {
		try {
			await ClientSchema.updateOne(
				{ _id: id },
				{ $push: { client_details_id: details_id } }
			)
		} catch (err) {
			return err.message
		}
	}
	async displayNewClient(id) {
		return await ClientSchema.findById(id)
	}
}

module.exports = Client
