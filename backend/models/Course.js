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
    category:{
        type: String,
        required: [true, 'please select category for this product'],
        enum: {
            values: [
                'Back end',
                'Front end',
                'Mobile'
            ]
        }

    },
    image:{

    }

})

const Course = mongoose.model('Course', CourseSchema)

module.exports = Course