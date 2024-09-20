const post = require('../../models/post')
const postController = {}

postController.delete = (req, res) => {
    if (!req.session.loggedIn || !req.session.userData.is_admin || req.body.user_id != req.session.userData.id) {
        res.status(403).json({
            message: `Forbidden`
        })
        return
    }
    post.delete(req.mysql, { id: req.body.id }, (err) => {
        if (err) {
            console.error(err)
            res.status(500).json({
                message: `Something went really wrong...`
            })
            return
        }
    })
    post.getByUser(req.mysql, { user_id: req.session.userData.id }, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).json({
                message: `Something went really wrong...`
            })
            return
        }
        res.render('partials/dashboard-posts', { layout: false, posts: data }, (err, html) => {
            if (err) {
                console.error(err)
                res.status(500).json({
                    message: `Something went really wrong...`
                })
                return
            }
            res.status(200).json({
                message: `Post ${req.body.id} deleted`,
                dashboardPosts: html
            })
        })
    })
}

postController.edit = (req, res) => {
    if (!req.session.loggedIn || !req.session.userData.is_admin || req.body.user_id != req.session.userData.id) {
        res.status(403).json({
            message: `Forbidden`
        })
        return
    }
    post.update(req.mysql, { title: req.body.title, content: req.body.content, id: req.body.id }, (err) => {
        if (err) {
            console.error(err)
            res.status(500).json({
                message: `Something went really wrong...`
            })
            return
        }
        res.status(200).json({
            message: `Post ${req.body.id} edited`
        })
    })
}

postController.create = (req, res) => {
    if (!req.session.loggedIn || !req.session.userData.is_admin) {
        res.status(403).json({
            message: `Forbidden`
        })
        return
    }
    post.insert(req.mysql, { title: req.body.title, content: req.body.content, user_id: req.session.userData.id }, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).json({
                message: `Something went really wrong...`
            })
            return
        }
        res.status(200).json({
            message: `Post created`
        })
    })
}

module.exports = postController