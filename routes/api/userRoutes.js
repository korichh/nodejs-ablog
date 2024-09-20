const router = require('express').Router()
const userController = require('../../controllers/api/userController')

router.post('/signin', userController.signin)
router.post('/signup', userController.signup)

module.exports = router