const express = require('express')
const enrollRouter = express.Router();


const { newEnroll, allEnrolled, singleEnrolledItem, deleteEnrolledCourse } = require('../controllers/enrolledController')

enrollRouter.post('/newEnroll', newEnroll);
enrollRouter.get('/allEnrolled', allEnrolled);
enrollRouter.get('/singleEnrolledItem/:id', singleEnrolledItem)
enrollRouter.delete('/deleteEnrolledCourse/:id', deleteEnrolledCourse)

 module.exports = enrollRouter;