const multer = require('multer')
const path = require('path')
const storage1 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../upload'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

exports.upload = multer({ storage: storage1 })

const storage2 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../upload2'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

exports.upload2 = multer({ storage: storage2 })


const storage3 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../upload/photo'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})


exports.uploadImg = multer({ storage: storage3 })
// chắc nãy ấn thừa cái gì, chạy dc r
// thay đường dẫn thì phải tạo cái mới
