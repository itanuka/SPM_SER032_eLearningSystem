const { find } = require('../models/Course');
const Course = require('../models/Course')


// @desc Get all courses
// @route GET api/v1/courses/getAllCourses
// @access Public
const getAllCourses = async (req, res)=>{

    try {
        const courses = await Course.find({});
        if(courses) res.status(200).json(courses)
        
    } catch (error) {
        console.error(error);
    }
}

// @desc Get single course
// @route GET api/v1/courses/getSingleCourse/:id
// @access Public
const getSingleCourse = async (req, res ) =>{

    const id = req.params.id;
    try {
        const course = await Course.findOne({_id:id})
        if(course) res.status(200).json(course);

    } catch (error) {
        res.status(500).json({
            ERR_CODE : error.code,
            message: "Could not find this Course"
        })
    }
}


// @desc Update existing course
// @route PUT api/v1/course/update_course/:id
// @access Private
const updateCourse = async (req, res) => {
    try {
        const data = req.body
        const id = req.params.id
        const updatedCourse = await Course.updateOne({_id: id}, data)
        res.json(updatedCourse)
    } catch (error) {
        res.json(error)
    }
}

// @desc Delete single course
// @route DELETE api/v1/course/delete_course/:id
// @access Private
const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await Course.deleteOne({_id: id})
        res.json(deleted)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {createCourse, getAllCourses, getSingleCourse}