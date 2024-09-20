const router = require('express').Router()
const dashboardController = require('../controllers/dashboardController')

router.get('/', dashboardController.get)
router.get('/create', dashboardController.create)
router.get('/edit/:id', dashboardController.edit)

module.exports = router