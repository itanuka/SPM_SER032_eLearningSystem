const Book = require('../models/Book.js');


/**
 * @desc upload a book to the system by admin
 * @route POST => api/v1/books/uploadBook
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
 * @desc get a praticular uploaded book  
 * @route POST => api/v1/books/getBook/:bookId
 */

const getSingleBook = async (req, res) => {

};



module.exports = {uploadBook, };