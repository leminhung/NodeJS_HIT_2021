const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const uploadMiddleware = require('../middlewares/uploadMiddleware')

router
    .route('/')
    .post(uploadMiddleware.upload.single('avatar'), uploadController.upload);
router
    .route('/2')
    .post(uploadMiddleware.upload2.array('avatar', 12), uploadController.upload);
router
    .route('/photo')
    .post(uploadMiddleware.uploadImg.array('avatar', 12), uploadController.upload);

module.exports = router


//Lưu ý những tên thì phải trùng với tên của form trong index.html
//và đường dẫn cũng phải trùng với thuộc tính action trong index.html