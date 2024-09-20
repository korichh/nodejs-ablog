const router = require('express').Router()
const postController = require('../../controllers/api/postController')

router.delete('/delete', postController.delete)
router.put('/edit', postController.edit)
router.post('/create', postController.create)

module.exports = router