const redirectLogin = (req, res, next) => {
    if(req.session.user){
        res.redirect('/')
        next()
    } else {
        return res.redirect('/login')
    }
}
const redirectRegister = (req, res, next) => {
    if(req.session.user){
        res.redirect('/')
        next()
    } else {
        return res.redirect('/register')
    }
}

const auth = (req, res, next) => {
    if(req.session.user){
        next()
    } else {
        return res.redirect('/login')
    }
}

module.exports = {redirectLogin, redirectRegister, auth}