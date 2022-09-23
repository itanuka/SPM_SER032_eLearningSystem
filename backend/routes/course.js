const express = require('express')
const courseRouter = express.Router();

const { createCourse, getAllCourses, getSingleCourse, updateCourse, deleteCourse  } = require('../controllers/courseController')

const Course = require("../models/Course")
const multer = require("multer")


// upload
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
// end of coding segment for upload


// @desc Update existing course
// @route PUT api/v1/courses/new_course
// @access Private
courseRouter.post("/new_course", upload.single("image"), async (req, res) => {
    try {
        
        const { course_name, author_name, description, category } = req.body
        const { path, mimetype } = req.file;
        const newCourse = new Course({
            course_name: course_name,
            author_name: author_name,
            description: description,
            category: category,
            image_path: path,
            image_mimetype: mimetype 
        })
    
        await newCourse.save()
        res.json(newCourse)
        
    } catch (error) {
        res.json(error)
    }
})

// deprecated
// courseRouter.post('/createCourse',createCourse);

courseRouter.get('/getAllCourses', getAllCourses);
courseRouter.get('/getSingleCourse/:id', getSingleCourse);
courseRouter.put('/update_course/:id', updateCourse);
courseRouter.delete('/delete_course/:id', deleteCourse);

module.exports = courseRouter;