const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.header('token')
    try{
        const decode = jwt.verify(token, 'project-nodejs');
        if(decode){
            req.user = decode
            next()
        }else{
            res.status(401).send('Ban chua dang nhap')
        }
    } catch(error){
        res.status(500).send(error)
    }
}


module.exports = {
    authenticate
}