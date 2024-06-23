const {Trip} = require('../models/index')
const { sequelize } = require('../models/index')

const create = async (req, res) => {
    const {fromStation, toStation, price, startTime} = req.body
    try {
        const newTrip = await Trip.create({fromStation, toStation, price, startTime})
        res.status(201).send(newTrip)
    } catch(error){
        res.status(500).send(error)
    }
    
}

const readAllTrip = async (req, res) => {
    try {
        const allTrip = await Trip.findAll()
        res.status(200).send(allTrip)
    }catch(error){
        res.status(500).send(error)
    }
}

const readDetailTrip = async (req, res) => {
    try {
        const {id} = req.params
        const trip = await Trip.findOne({
            where:{
                id
            }
        })
        res.status(200).send(trip)
    }catch(error){
        res.status(500).send(error)
    }
}

const updateTrip = async (req, res) => {
    const {id} = req.params
    const { fromStation, toStation, price, startTime } = req.body
    console.log(fromStation, toStation, price, startTime, id)
    try{
        const trip = await Trip.findOne({
            where:{
                id
            }
        })
        console.log(trip)
        trip.fromStation = fromStation
        trip.toStation = toStation
        trip.price = price
        trip.startTime = startTime
        await trip.save()
        res.status(200).send('Updated trip success')
    }catch(error){
        res.status(500).send(error)
    }
}

const deleteTrip = async (req, res) => {
    const {id} = req.params
    try{
        const trip = await Trip.destroy({
            where: {
                id
            }
        })
        res.status(200).send(`Deleted trip success: ${id}`)
    }catch(error){
        res.status(500).send(error)
    }
}

const filterPriceTrip = async (req, res) => {
    const {minPrice, maxPrice} = req.query
    const [results] = await sequelize.query(`SELECT * FROM vexere_db.trips
    where price between ${minPrice} and ${maxPrice}`)
     res.status(201).send(results)
}

const filterByProvince = async (req, res) => {
    const {toProvince, fromProvince} = req.query
    const [results] = await sequelize.query(`
    SELECT companies.name as Nha_xe, companies.description as mo_ta, companies.image, trips.startTime, trips.price as gia_ve, fromStation.address as diem_di, toStation.address as diem_den FROM vexere_db.trips
join vexere_db.stations as fromStation
on trips.fromStation = fromStation.id 
join vexere_db.stations as toStation
on trips.toStation = toStation.id
join vexere_db.companies
on trips.id = companies.trip_id
where fromStation.province like '%${fromProvince}%' and toStation.province like '%${toProvince }%'
    `)
    res.status(201).send(results)
}

const filterEarlyTime = async (req, res) => {
    const {toProvince, fromProvince} = req.query
    const [results] = await sequelize.query(`
    SELECT companies.name as Nha_xe, companies.description as mo_ta, companies.image, trips.startTime, trips.price as gia_ve, fromStation.address as diem_di, toStation.address as diem_den FROM vexere_db.trips
join vexere_db.stations as fromStation
on trips.fromStation = fromStation.id 
join vexere_db.stations as toStation
on trips.toStation = toStation.id
join vexere_db.companies
on trips.id = companies.trip_id
where fromStation.province like '%${fromProvince}%' and toStation.province like '%${toProvince }%'
order by cast(startTime as time)
    `)
    res.status(201).send(results)
}
module.exports = {
    create,
    readAllTrip,
    readDetailTrip,
    updateTrip,
    deleteTrip,
    filterPriceTrip,
    filterByProvince,
    filterEarlyTime
}