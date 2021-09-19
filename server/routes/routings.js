const router = require('express').Router()
const controllers = require('../controllers/dockerPsControllers')

router.get('/dashboard', controllers.getContainers)

module.exports = router
