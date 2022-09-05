// const Enrolled = require('../models/EnrolledCourse')
// const Course = require('../models/Course')

// exports.newEnroll =  async (req, res, next) => {
//     const{ enrolledItems } = req.body;

//     const enroll = await Enrolled.create({

//         // userID: req.user._id,
//         // customerName: req.user.first_name + " " + req.user.last_name,
//         enrolledItems

//     })


//     res.status(200).json({
//         success: true,
//         enroll
//     })
// }

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

module.exports = { newEnroll }