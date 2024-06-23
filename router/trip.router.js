const express = require('express')
const tripRouter = express.Router()
const {  create, readAllTrip, readDetailTrip, updateTrip, deleteTrip, filterPriceTrip, filterByProvince, filterEarlyTime} = require('../controller/trip.controller')


tripRouter.post('/',create)
tripRouter.get('/',readAllTrip)
tripRouter.get('/:id',readDetailTrip)
tripRouter.put('/:id',updateTrip)
tripRouter.delete('/:id',deleteTrip)
tripRouter.post('/filtering-by-price', filterPriceTrip)
tripRouter.post('/filtering-by-province', filterByProvince)
tripRouter.post('/filtering-trip-earlytime', filterEarlyTime)

module.exports = {
    tripRouter
}