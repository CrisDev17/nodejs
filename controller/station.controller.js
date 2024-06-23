const {Station} = require('../models/index')
const { Op } = require("sequelize");
const createStation = async (req,res) => {
   try{
    const { name, address, province } = req.body
    const newStation = await Station.create({ name, address, province })
    res.status(201).send(newStation)
   }
   catch(error){
    res.status(500).send(error)
   }
}

const readStation = async (req,res) => {
    const {name} = req.query
    try{
        if(name){
            const stations = await Station.findAll({
                    where: {
                        name: {
                            [Op.like] : `%${name}%`
                        }
                    }
                }
            )
            res.status(200).send(stations)
        } else {
            const stations = await Station.findAll()
            res.status(200).send(stations)
        }
    } catch(error){
        res.status(500).send(error)
    }
}

const readDetailStation = async (req,res) => {
    try{
        const {id} = req.params
        const station = await Station.findOne({
            where: {
                id
            }
        })
        res.status(200).send(station)
    } catch(error){
        res.status(500).send(error)
    }
}

const updateStation = async (req,res) => {
    const {id} = req.params
    const {name, address, province} = req.body
    try{
        const station = await Station.findOne({
            where: {
                id
            }
        })
        station.name = name
        station.address = address
        station.province = province
        await station.save()
        res.status(200).send(station)
    } catch(error){
        res.status(500).send(error)
    }
}

const deleteStation = async (req,res) => {
    const {id} = req.params
    try{
        const station = await Station.destroy({
            where: {
                id
            }
        })
        res.status(200).send(`Deleted station with id ${id}`)
    } catch(error){
        res.status(500).send(error)
    }
}
module.exports = {
    createStation,
    readStation,
    readDetailStation,
    updateStation,
    deleteStation
}