const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const dotenv = require('dotenv')

dotenv.config()


    const store = new MongoDBStore({
        uri: process.env.DB_CONNECTION,
        collection: 'sessions'
    })

module.exports = store