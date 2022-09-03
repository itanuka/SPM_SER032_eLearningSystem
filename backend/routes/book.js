const express = require('express');
const bookRouter = express.Router();

const {uploadBook} = require('../controllers/bookController.js');

bookRouter.post('/uploadBook', uploadBook);

module.exports = uploadBook;