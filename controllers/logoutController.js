const logout = (req, res, next) => {
    if(req.session.user) {
        req.session.destroy();
        res.clearCookie('ssid')
        res.redirect('/login')
    }
}

module.exports = {logout}