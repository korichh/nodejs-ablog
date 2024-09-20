const signinController = {}

signinController.get = (req, res) => {
    if (req.session.loggedIn) {
        res.status(301).redirect('/')
        return
    }
    res.render('signin', {
        layout: 'main',
        title: 'Sign In | ABlog'
    })
}

module.exports = signinController