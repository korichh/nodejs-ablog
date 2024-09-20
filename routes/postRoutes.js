const router = require('express').Router()
const postController = require('../controllers/postController')

router.get('/:id', postController.get)

module.exports = router