const express = require('express')
const courseRouter = express.Router();

const { createCourse, getAllCourses, getSingleCourse  } = require('../controllers/courseController')

courseRouter.post('/createCourse',createCourse);
courseRouter.get('/getAllCourses', getAllCourses);
courseRouter.get('/getSingleCourse/:id', getSingleCourse)

module.exports = courseRouter;