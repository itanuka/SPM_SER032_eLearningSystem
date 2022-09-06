const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StaffSchema = new Schema({
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

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
