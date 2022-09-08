const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EnrolledSchema = new Schema({

    enrolledItems: [{

        // courseName:{
        //     type: mongoose.Schema.Types.String,
        //     required: true,
        //     ref: 'Course'
        // },

        course: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Course'
        },
        // change this to an object ID
        studentID: {
            type: Number,
            required: true
        }

    }],

    // ref eka poddak check krl blnna
    // studentID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Student'
    // },

    // studentName:{
    //     type: mongoose.Schema.Types.String,
    //     required: true,
    //     ref: 'Student'
    // },
});

const Enrolled = mongoose.model('EnrolledCourse', EnrolledSchema)

module.exports = Enrolled