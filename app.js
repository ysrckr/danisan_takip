const express = require('express')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
const handlebars = require('handlebars')
const db = require('./config/db')

// Env Vars
dotenv.config()

// Connection to Database
db()

const app = express()

app.use(express.static(__dirname + '/public'))

// View Engine
app.engine('.hbs', hbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', __dirname + '/public/views')

handlebars.registerPartial('header', 'header.hbs')
handlebars.registerPartial('footer', 'footer.hbs')

// Express Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
const mainRoute = require('./routes/mainRoute')
app.use('/', mainRoute)

const clientsRoute = require('./routes/clientsRoute')
app.use('/clients', clientsRoute)

const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`App running on ${port}`)
})
