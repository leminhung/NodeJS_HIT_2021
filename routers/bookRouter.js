const express = require('express')

const router = express.Router({ mergeParams: true })

const bookController = require('../controllers/bookController')

const adminMiddleware = require('../middlewares/adminMiddleware')

router
    .route('/')
    .get(adminMiddleware.admin ,bookController.getAllBook)
    .post(bookController.createBook)

router
    .route('/:id')
    .get(adminMiddleware.admin ,bookController.getBook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook)


module.exports = router
