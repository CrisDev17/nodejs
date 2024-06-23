const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { sequelize } = require('../models/index')

const registerUser = async (req,res) => {
    const {name,email,password,numberPhone} = req.body
    try{
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await User.create({name,email,password: hashPassword,numberPhone})
        res.status(201).send(newUser)  
    } catch(error){
        res.status(500).send(error)
    }
}

const loginUser = async (req,res) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({
            where: {
                email
            }
        })
        if(user){
            const isAuth = bcrypt.compareSync(password, user.password);
            if(isAuth){
                const token = jwt.sign({ email: user.email, type: user.type}, 'project-nodejs', { expiresIn: 60 * 1440 })
                res.status(200).send({message:'Đăng nhập thành công', token: token})
            } else {
                res.status(404).send('Mật khẩu không chính xác')
            }
        } else {
            res.status(404).send("Email không hợp lệ")
        }
    } catch(error) {
        res.status(500).send(error)
    }

}

const uploadFile = async (req, res) => {
     const {error, user, file} = req
     const urlImg = `http://localhost:2001/${file.path}`
     if(error){
        res.status(500).send(error)
     }else{
        const userFind = await User.findOne({
            where: {
                email: user.email
            }
        })
        userFind.avatar = urlImg
        await userFind.save()
        res.status(201).send(userFind)
     }
}

const getAllTrips = async (req, res) => {
    const [results] = await sequelize.query(`SELECT users.name as userName, fromSta.name as fromStation, toSta.name as toStation FROM vexere_db.users
    inner join vexere_db.tickets
    on users.id = tickets.user_id
    inner join vexere_db.trips
    on tickets.trip_id = trips.id
    inner join vexere_db.stations as fromSta
    on trips.fromStation = fromSta.id
    inner join vexere_db.stations as toSta
    on trips.toStation = toSta.id;`);
    res.status(200).send(results)
}
module.exports = {
    registerUser,
    loginUser,
    uploadFile,
    getAllTrips
}