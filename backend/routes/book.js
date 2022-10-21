const path = require('path')
const express = require('express');
const bookRouter = express.Router();


const { uploadBook, getSingleBookById, getAllBooks, updateBookDetails, deleteBook } = require('../controllers/bookController.js');

const Book = require("../models/Book")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/uploads")
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, '../frontend/public/uploads');
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


bookRouter.post("/uploadBook", upload.fields([{ name: "file1" }, { name: "file2" }]), async (req, res) => {
  try {

    const { title, isbn, author, publishDate, publisher, pages, category, description } = req.body
    const coverPath = req.files.file1[0].path;
    const coverMimetype = req.files.file1[0].mimetype;
    const bookPath = req.files.file2[0].path;
    const bookMimetype = req.files.file2[0].mimetype;


    const newBook = new Book({
      title: title,
      isbn: isbn,
      author: author,
      publishDate: publishDate,
      publisher: publisher,
      pages: pages,
      category: category,
      description: description,
      cover_file_path: coverPath,
      cover_file_mimetype: coverMimetype,
      book_file_path: bookPath,
      book_file_mimetype: bookMimetype
    })

    await newBook.save()
    res.json(newBook)

  } catch (error) {
    res.json(error)
  }
})

bookRouter.get('/download/:id', async (req, res) => {
  try {
    const file = await Book.findById(req.params.id);
    res.set({
      'Content-Type': file.book_file_mimetype

    });
    res.sendFile(path.join(__dirname, '..', file.book_file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

// bookRouter.post('/uploadBook', uploadBook);
bookRouter.post('uploadBook',)
bookRouter.get('/getSingleBook/:bookId', getSingleBookById);
bookRouter.get('/getAllBooks', getAllBooks);
bookRouter.put('/updateBookDetails/:bookId', updateBookDetails);
bookRouter.delete('/deleteBook/:bookId', deleteBook);

module.exports = bookRouter;