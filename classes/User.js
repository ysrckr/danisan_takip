const UserSchema = require('../models/User')
const bcrypt = require('bcryptjs')

class User {
	constructor(name, email, password) {
		;(this.name = name), (this.email = email), (this.password = password)
	}
	async createUser() {
		if (await UserSchema.findOne({ email: this.email })) {
			const alreadyExistError = `${this.email} already exists`
			return alreadyExistError
		} else {
			let hashed = await bcrypt.hash(this.password, 10)
			this.user = new UserSchema({
				name: this.name,
				email: this.email,
				password: hashed,
			})

			const res = await this.user.save()
			return res
		}
	}

	async findUserByEmail(email, password) {
		this.email = email
        this.password = password
		this.user = await UserSchema.findOne({ email })
        if(await bcrypt.compare(password, this.user.password)) {
            return this.user
        } else {
            return 'Password or Email Does Not Match'
        }

	}
}

module.exports = User
