
exports.loginController = (req, res, next) => {
    res.render('login', {title: 'Welcome to Login', css:['main.min.css', 'login.min.css']})
}