const loginController = (req, res, next) => {
	res.render('login', {
		title: 'Welcome to Login',
		mainHeader: 'Login',
		css: ['main.min.css', 'login.min.css'],
		javascript: ['index.js'],
	})
}

module.exports = {loginController}