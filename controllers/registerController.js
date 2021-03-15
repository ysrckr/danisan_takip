const registerController = (req, res, next) => {
	res.render('register', {
		title: 'Welcome to Login',
		mainHeader: 'Register',
		css: ['main.min.css', 'register.min.css'],
		javascript: ['index.js'],
	})
}

module.exports = {registerController}