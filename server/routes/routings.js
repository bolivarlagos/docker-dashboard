const router = require('express').Router()
const controllers = require('../controllers/dockerPsControllers')
const runControllers = require('../controllers/dockerRunControllers')
const actionControllers = require('../controllers/dockerActionControllers')

router.get('/dashboard', controllers.getContainers)
router.post('/run', runControllers.dockerRun)
router.post('/action', actionControllers.dockerAction)

module.exports = router
