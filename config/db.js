const mongoose = require('mongoose')

require('dotenv').config()

const db = async () => {
    const database = mongoose.connection
	try {
		await mongoose.connect(process.env.DB_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
        
        
        console.log('DB Connected')
        
		
	} catch (err) {
		database.on('error', console.error.bind(console, 'Connection Error'))
		process.exit(1)
	}
}

module.exports = db
