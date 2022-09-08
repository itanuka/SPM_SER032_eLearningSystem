
const Enrolled = require("../models/EnrolledCourse")
const Course =require("../models/Course")

const newEnroll = async (req, res) => {
    try {
        const data = req.body
        const newEnrolledItem = await Enrolled.create(data)
        // newEnrolledItem.save()
        res.json(newEnrolledItem)
    } catch (error) {
        res.json(error)
    }
}

const allEnrolled = async (req, res) => {
    try {
        const enrolledList = await Enrolled.find({})
        res.json(enrolledList)
    } catch (error) {
        res.json(error)
    }
}

const singleEnrolledItem = async (req, res) => {
    try {
        const id = req.params.id
        const enrolledItem = await Enrolled.findOne({_id: id})
        res.json(enrolledItem)
    } catch (error) {
        res.json(error)
    }
}

const deleteEnrolledCourse = async (req, res) =>{
    try {
        const id = req.params.id;
        const deleteCourse = await Enrolled.deleteOne({_id:id})
        res.json(deleteCourse);
    } catch (error) {
        res.json(error)
    }
}

module.exports = { newEnroll, allEnrolled, singleEnrolledItem , deleteEnrolledCourse}