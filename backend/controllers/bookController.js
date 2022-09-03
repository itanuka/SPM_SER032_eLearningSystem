const Book = require('../models/Book.js');


/**
 *  upload a book to the system by admin
 *  POST => api/v1/books/uploadBook
 */

const uploadBook = async (req, res) => {
    const {title, author, publishDate, publisher, pages, category, description} = req.body;

    try {
        const book = await Book.create({
            title,
            author,
            publishDate,
            publisher,
            pages,
            category,
            description
        });

        if(book) res.status(201).json(book);
        
    } catch (error) {
        res.status(400).json({
            error
        })
    }
};


/**
 *  get a praticular uploaded book by bookId 
 *  GET => api/v1/books/getSingleBook/:bookId
 */

const getSingleBookById = async (req, res) => {
    const bookId = req.params.bookId;

    try {
        const book = await Book.findOne({_id: bookId});
        if(book) res.status(200).json(book);
        
    } catch (error) {
        res.status(500).json({
            ERR_CODE : error.code,
            message: "could not find this book"
        })
    }
};


/**
 *  get all uploaded books  
 *  GET => api/v1/books/getAllBooks
 */

const getAllBooks = async (req, res) => {
  
    try {
        const books = await Book.find({});
        if(books) res.status(200).json(books);

    } catch (error) {
        console.error(error);
    }
};



module.exports = {uploadBook, getSingleBookById, getAllBooks};