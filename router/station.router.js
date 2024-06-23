const express = require('express')
const stationRouter = express.Router()
const {createStation, readStation, readDetailStation, updateStation, deleteStation}= require('../controller/station.controller')
const {checkExist} = require('../middleware/validation/checkExist')
const {Station} = require('../models/index')
const {authenticate} = require('../middleware/auth/authenticate')
const {authorize} = require('../middleware/auth/authorize')

stationRouter.post('/', authenticate, authorize(['ADMIN','SUPER_ADMIN']), createStation)
stationRouter.get('/', readStation)
stationRouter.get('/:id', readDetailStation)
stationRouter.put('/:id',checkExist(Station) ,updateStation)
stationRouter.delete('/:id', authenticate, checkExist(Station) ,deleteStation)


module.exports = {
    stationRouter
}