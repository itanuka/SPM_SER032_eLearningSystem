const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({

    course_name:{
        type: String,
        required:true
    },
    author_name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true

    },
    category: {
        type: String,
        required: true
    },
    image_path: {
        type: String,
    },
    image_mimetype: {
        type: String
    }

})

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course