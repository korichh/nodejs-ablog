const post = require('../models/post')
const postController = {}

postController.get = (req, res) => {
    post.getById(req.mysql, { id: req.params.id }, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).render('error', { title: `Error ${500} | ABlog`, code: 500, message: `Something went really wrong...` })
            return
        } else if (data && data.length === 0) {
            res.status(404).render('error', { title: `Error ${404} | ABlog`, code: 404, message: `It looks like this page doesn't exist` })
            return
        }
        res.render('post', {
            layout: 'main',
            title: `${data[0].title} | ABlog`,
            post: data[0],
            loggedIn: req.session.loggedIn,
            userData: req.session.userData
        })
    })
}

module.exports = postController