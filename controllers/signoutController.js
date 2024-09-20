const signoutController = {}

signoutController.get = (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy()
    }
    res.status(301).redirect('/')
}

module.exports = signoutController