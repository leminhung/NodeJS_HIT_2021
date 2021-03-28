const Book = require('../models/book')
const asyncHandle = require('../middlewares/asyncHandle')

module.exports = {
    getAllBook: asyncHandle(async (req, res, next) => {
    
        const books = await Book.find()
        res.json({ 
            err: 0,
            success: true,
            data: books,
        })
    }),
    

    getBook: asyncHandle(async (req, res, next) => {
    
        const book = await Book.findById(req.params.id)
        console.log(book);
        res.json({
            err: 0,
            success: true,
            data: book,
        })
    }),


    createBook: asyncHandle(async (req, res, next) => {
    
        
        const { bookName, price, author, nxb } = req.body
        const book = await Book.create({
            bookName,
            price,
            author,
            nxb,
            categoryID: req.params.id
        })
        res.json({
            err: 0,
            success: true,
            data: book,
        })
    }),

    updateBook: asyncHandle(async (req, res, next) => {
    
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        
        res.json({
            err: 0,
            success: true,
            data: book,
        })
    }),

    deleteBook: asyncHandle(async (req, res, next) => {
    
        const book = await Book.findByIdAndDelete(req.params.id)
            
        if(!book) {
            return res.json({
                err: 1,
                success: false,
                data: `Cannot find Book with ID ${req.params.id} to delete`
            })
        }
        
        res.json({
            err: 0,
            success: true,
            data: book,
        })
    }),   

}