const multer  = require('multer')
const mkdirp = require('mkdirp')

const uploadImage = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`)
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `./public/images/${type}`) // set up chỗ cần lưu file
        },
        filename: function (req, file, cb) {
          cb(null,Date.now() + '_' + file.originalname)
        }
      })
    const upload = multer(
      { storage: storage,
        fileFilter: (req, file, cb) => {
          const extensionImage = ['.png','.jpg']
          const extension = file.originalname.slice(-4)
          const check = extensionImage.includes(extension)
          if(check){
            cb(null,true)
          }else{
            req.error = 'File khong hop le'
            // cb(new Error('extension khong hop le'))
            cb(null)
          }
        }
      }
    )
    return upload.single(type)
}


module.exports = {
    uploadImage,
}