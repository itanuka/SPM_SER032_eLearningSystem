const express = require('express');
const bookRouter = express.Router();

const {uploadBook, getSingleBookById, getAllBooks} = require('../controllers/bookController.js');

bookRouter.post('/uploadBook', uploadBook);
bookRouter.get('/getSingleBook/:bookId', getSingleBookById);
bookRouter.get('/getAllBooks', getAllBooks);

module.exports = bookRouter;