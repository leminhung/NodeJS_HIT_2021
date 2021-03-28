// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
const path = require("path");
const router = express.Router();
const uploadController = require("../controllers/uploadController");


//SET STORAGE
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../upload'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })
  
router.route("/")
    .post(upload.single('avatar'), uploadController.upload)
    .post(upload.array('avatar', 12), uploadController.upload)
module.exports = router;