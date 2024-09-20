const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const postRoutes = require('./postRoutes')
const signinRoutes = require('./signinRoutes')
const signupRoutes = require('./signupRoutes')
const signoutRoutes = require('./signoutRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const apiRoutes = require('./api')

router.use('/', homeRoutes)
router.use('/post', postRoutes)
router.use('/signin', signinRoutes)
router.use('/signup', signupRoutes)
router.use('/signout', signoutRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes)

module.exports = router