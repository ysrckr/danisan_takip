exports.loginController = (req, res, next) => {
	res.render('login', {
		title: 'Welcome to Login',
		loginHeader: 'Login',
		css: ['main.min.css', 'login.min.css'],
		javascript: ['index.js'],
	})
}
