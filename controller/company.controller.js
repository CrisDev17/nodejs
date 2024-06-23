const {Company} = require('../models/index')
const { sequelize } = require('../models/index')
const { Op } = require("sequelize");
const findCompany = async (req, res) => {
    const {name} = req.query
    try{
        const results = await Company.findAll({
            where: {
                name: {
                    [Op.like] : `%${name}%`
                }
            }
        })
        res.status(201).send(results)
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = {
    findCompany
}