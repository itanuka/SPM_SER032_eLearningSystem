const CourseMaterial = require("../models/CourseMaterial")


// @desc Update existing course material
// @route PUT api/v1/course/update_course_material/:id
// @access Private
const updateCourseMaterial = async (req, res) => {
    try {
        const data = req.body
        const id = req.params.id
        const updatedCourseMaterial = await CourseMaterial.updateOne({_id: id}, data)
        res.json(updatedCourseMaterial)
    } catch (error) {
        res.json(error)
    }
}

// @desc Get all course materials
// @route GET api/v1/course/get_course_materials
// @access Public
const getCourseMaterial = async (req, res) => {
    try {
        const CourseMaterial = await CourseMaterial.find({})
        res.json(CourseMaterial)
    } catch (error) {
        res.json(error)
    }
}

// @desc Get single course material
// @route GET api/v1/course/get_course_material/:id
// @access Public
const getSingleCourseMaterial = async (req, res) => {
    try {
        const id = req.params.id
        const singleCourseMaterial = await CourseMaterial.findOne({_id: id})
        res.json(singleCourseMaterial)
    } catch (error) {
        res.json(error)
    }
}

// @desc Get single course material by course ID
// @route GET api/v1/course/get_course_material/:courseID
// @access Public
const getSingleCourseMaterialByCourseID = async (req, res) => {
    try {
        const courseID = req.params.courseID
        const singleCourseMaterial = await CourseMaterial.find({courseID: courseID})
        res.json(singleCourseMaterial)
    } catch (error) {
        res.json(error)
    }
}


// @desc Delete single course material
// @route DELETE api/v1/course/delete_course_material/:id
// @access Private
const deleteCourseMaterial = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await CourseMaterial.deleteOne({_id: id})
        res.json(deleted)
    } catch (error) {
        res.json(error)
    }
}

module.exports = { updateCourseMaterial, getCourseMaterial, getSingleCourseMaterial, getSingleCourseMaterialByCourseID, deleteCourseMaterial }
