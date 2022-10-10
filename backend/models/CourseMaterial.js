const mongoose = require("mongoose")
const Course = require("./Course")

const CourseMaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    courseID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course',
        required: true
    },
    file_path: {
        type: String,
    },
    file_mimetype: {
        type: String
    }
})

const CourseMaterial = mongoose.model("course_materials", CourseMaterialSchema)

module.exports = CourseMaterial