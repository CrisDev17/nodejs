const express = require('express')
const userRouter= express.Router()
const {registerUser, loginUser, uploadFile, getAllTrips} = require('../controller/user.controller')
const {uploadImage} = require('../middleware/upload/upload-image')
const {authenticate} = require('../middleware/auth/authenticate')

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/upload-avatar",authenticate ,uploadImage('user'), uploadFile)
userRouter.get("/trips", getAllTrips)

module.exports = {
    userRouter
}