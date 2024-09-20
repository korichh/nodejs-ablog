const router = require('express').Router()
const signinController = require('../controllers/signinController')

router.get('/', signinController.get)

module.exports = router