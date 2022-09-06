const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
