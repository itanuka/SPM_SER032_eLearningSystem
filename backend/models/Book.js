const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    isbn: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    publishDate: {
        type: String,
        require: true
    },
    publisher: {
        type: String,
        require: true
    },
    pages: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    cover_file_path: {
        type: String
    },
    cover_file_mimetype: {
        type: String
    },
    book_file_path: {
        type: String
    },
    book_file_mimetype: {
        type: String
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;