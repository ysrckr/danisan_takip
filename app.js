const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv')
const hbs = require('express-handlebars')
const handlebars = require('handlebars')
const cors = require('cors')
const db = require('./config/db')
const store = require('./config/store')


// Env Vars
dotenv.config()

// Connection to Database
db()

// Initilize Express
const app = express()

//Session
app.use(
	session({
		name: 'ssid',
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		store,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24, // 1 day
		},
	})
)

// Cors
app.use(cors())

app.use(express.static(__dirname + '/public'))

// View Engine
app.engine('.hbs', hbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', __dirname + '/public/views')

handlebars.registerPartial('header', 'header.hbs')
handlebars.registerPartial('footer', 'footer.hbs')

// Express Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
const mainRoute = require('./routes/mainRoute')
app.use('/', mainRoute)

const clientsRoute = require('./routes/clientsRoute')
app.use('/clients', clientsRoute)

const calculatorRoute = require('./routes/calculatorRoute')
app.use('/calculator', calculatorRoute)

// Listening
const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`App running on ${port}`)
})
