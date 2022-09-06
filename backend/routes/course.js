const express = require('express')
const router = express.Router();


const { 
    getCourses,
    newCourse, 
    getSingleCourse
    //updateEmployee, 
    //deleteEmployee
 } = require('../controllers/courseController')


router.route('/courses').get(getCourses);
router.route('/course/:id').get(getSingleCourse);
router.route('/course/new').post(newCourse);

// router.route('/admin/course/:id')
//     .put(updateEmployee)
//     .delete(deleteEmployee);

module.exports = router;