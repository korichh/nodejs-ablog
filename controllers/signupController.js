const signupController = {}

signupController.get = (req, res) => {
    if (req.session.loggedIn) {
        res.status(301).redirect('/')
        return
    }
    res.render('signup', {
        layout: 'main',
        title: 'Sign Up | ABlog'
    })
}

module.exports = signupController