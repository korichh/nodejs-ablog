const post = require('../models/post')
const dashboardController = {}

dashboardController.get = (req, res) => {
    if (!req.session.loggedIn || !req.session.userData.is_admin) {
        res.status(403).redirect('/')
        return
    }
    post.getByUser(req.mysql, { user_id: req.session.userData.id }, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).render('error', { title: `Error ${500} | ABlog`, code: 500, message: `Something went really wrong...` })
            return
        }
        res.render('dashboard', {
            layout: 'main',
            title: 'Dashboard | ABlog',
            posts: data,
            loggedIn: req.session.loggedIn,
            userData: req.session.userData
        })
    })
}

dashboardController.edit = (req, res) => {
    if (!req.session.loggedIn || !req.session.userData.is_admin) {
        res.status(403).redirect('/')
        return
    }
    post.getById(req.mysql, { id: req.params.id }, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).render('error', { title: `Error ${500} | ABlog`, code: 500, message: `Something went really wrong...` })
            return
        } else if (data && data.length === 0) {
            res.status(404).render('error', { title: `Error ${404} | ABlog`, code: 404, message: `It looks like this page doesn't exist` })
            return
        }
        res.render('edit', {
            layout: 'main',
            title: `Edit Post | ABlog`,
            post: data[0],
            loggedIn: req.session.loggedIn,
            userData: req.session.userData
        })
    })
}

dashboardController.create = (req, res) => {
    if (!req.session.loggedIn || !req.session.userData.is_admin) {
        res.status(403).redirect('/')
        return
    }
    res.render('create', {
        layout: 'main',
        title: 'Create Post | ABlog',
        loggedIn: req.session.loggedIn,
        userData: req.session.userData
    })
}

module.exports = dashboardController