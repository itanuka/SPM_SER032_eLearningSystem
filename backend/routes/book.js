const express = require('express');
const bookRouter = express.Router();

const {uploadBook, getSingleBookById, getAllBooks, updateBookDetails, deleteBook} = require('../controllers/bookController.js');

const Book = require("../models/Book")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../frontend/public/uploads/books")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, '../frontend/public/uploads/books');
      },
      filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
      }
    }),
    limits: {
      fileSize: 100000000 // max file size 1MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
        return cb(
          new Error(
            'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
          )
        );
      }
      cb(undefined, true); // continue with upload
    }
});


bookRouter.post("/uploadBook", upload.single("file"), async (req, res) => {
    try {
        
        const { title, author, publishDate, publisher, pages, category, description } = req.body
        const { path, mimetype } = req.file;
        const newBook = new Book({
            title: title,
            author: author,
            publishDate: publishDate,
            publisher: publisher,
            pages: pages,
            category: category,
            description: description,
            file_path: path,
            file_mimetype: mimetype 
        })
    
        await newBook.save()
        res.json(newBook)
        
    } catch (error) {
        res.json(error)
    }
})

// bookRouter.post('/uploadBook', uploadBook);
bookRouter.post('uploadBook', )
bookRouter.get('/getSingleBook/:bookId', getSingleBookById);
bookRouter.get('/getAllBooks', getAllBooks);
bookRouter.put('/updateBookDetails/:bookId', updateBookDetails);
bookRouter.delete('/deleteBook/:bookId', deleteBook);

module.exports = bookRouter;