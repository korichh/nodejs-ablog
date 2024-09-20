const post = require('../models/post')
const homeController = {}

homeController.get = (req, res) => {
    post.getAll(req.mysql, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).render('error', { title: `Error ${500} | ABlog`, code: 500, message: `Something went really wrong...` })
            return
        }
        res.render('home', {
            layout: 'main',
            title: 'Home Page | ABlog',
            posts: data,
            loggedIn: req.session.loggedIn,
            userData: req.session.userData
        })
    })
}

module.exports = homeController