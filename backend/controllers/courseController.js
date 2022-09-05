const Course = require('../models/Course')
const APIFeatures = require('../utils/apiFeatures')

exports.newCourse = async (req, res, next) => {

    const course = await Course.create(req.body);

    res.status(201).json({
        success: true,
        course
    })
}

exports.getCourses =  async (req, res, next) => {

    // const resPerPage = 4;
    // const courseCount = await Course.countDocuments()

    const apiFeatures = new APIFeatures(Course.find(), req.query)
        //.search()
        //.filter()
       // .pagination(resPerPage)

    const courses = await apiFeatures.query;


    res.status(200).json({
        success: true,
       // courseCount,
       // resPerPage,
        courses
    })

}

exports.getSingleCourse = async (req, res, next) => {

    const course = await Course.findById(req.params.id);

    if(!course) {
        return next(new ErrorHandler('Course not found', 404));
    }

    res.status(200).json({
        success: true,
        course
    })
}