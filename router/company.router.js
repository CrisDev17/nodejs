const express = require('express')
const companyRouter = express.Router()

const {findCompany} = require('../controller/company.controller')

companyRouter.post('/find-company', findCompany)

module.exports = {
    companyRouter
}