

const authorize = (arrType) => (req, res, next) => {
      const {user} = req
      if(arrType.findIndex(el => el === user.type) > -1){
            next()
          } else {
            res.status(403).send('Bạn đã đăng nhập nhưng không có quyền truy cập')
          }
      console.log(user)
      }


module.exports = {
    authorize
}