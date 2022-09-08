const { find } = require('../models/Course');
const Course = require('../models/Course')


// create course

const createCourse = async (req, res) =>{

    const {course_name, author_name, description, category, image} = req.body;

        try {
            const course = await Course.create({
                course_name,
                author_name,
                description,
                category,
                
            });
    
            if(course) res.status(201).json(course);
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

//get all Courses

const getAllCourses = async (req, res)=>{

    try {
        const courses = await Course.find({});
        if(courses) res.status(200).json(courses)
        
    } catch (error) {
        console.error(error);
    }
}

//get Single Courses

const getSingleCourse = async (req, res ) =>{

    const id = req.params.id;
    try {
        const course = await Course.findOne({_id:id})
        if(course) res.status(200).json(course);

    } catch (error) {
        res.status(500).json({
            ERR_CODE : error.code,
            message: "could not find this Course"
        })
    }
}


module.exports = {createCourse, getAllCourses, getSingleCourse}