const express = require('express');
const bookRouter = express.Router();

const {uploadBook, getSingleBookById, getAllBooks, updateBookDetails} = require('../controllers/bookController.js');

bookRouter.post('/uploadBook', uploadBook);
bookRouter.get('/getSingleBook/:bookId', getSingleBookById);
bookRouter.get('/getAllBooks', getAllBooks);
bookRouter.put('/updateBookDetails/:bookId', updateBookDetails);

module.exports = bookRouter;