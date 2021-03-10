const express = require('express')

const hbs = require('express-handlebars')
const handlebars = require('handlebars')

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

// Route
app.get('/', (req, res) => {
	if (true) {
		res.render('login', {
			title: 'Welcome to Login',
			css: ['main.min.css', 'login.min.css'],
            greeting: 'Hello'
		})
	} else {
		res.render('register')
	}
})

const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`App running on ${port}`)
})
