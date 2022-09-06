const bcrypt = require("bcryptjs");
const Teacher = require("../models/Teacher");

exports.registerTeacher = async (req, res) => {

    let { firstName, lastName, gender, dob, contactNo, email, address, qualifications, password } = req.body;

    password = await bcrypt.hash(password, 10);

    const newTeacher = new Teacher({
        firstName,
        lastName,
        gender,
        dob,
        contactNo,
        email,
        address,
        qualifications,
        password
    });

    newTeacher.save()
    res.json(newTeacher)
};


// GET ALL TEACHERS
exports.getAllTeachers = async (req, res) => {

    try {
        Teacher.find({}, (err, result) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.error(error)
    }
};



// GET A TEACHER
exports.getTeacher = async (req, res) => {
    let id = req.params.id;

    try {
        Teacher.findOne({ _id: id }, (err, result) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.error(error)
    }
};




// UPDATE TEACHER DETAILS
exports.updateTeacher = async (req, res) => {

    let id = req.params.id;

    const { firstName, lastName, gender, dob, contactNo, email, address, qualifications } = req.body;

    const updateTeacher = {
        firstName,
        lastName,
        gender,
        dob,
        contactNo,
        email,
        address,
        qualifications
    };

    try {
        Teacher.updateOne({ _id: id }, updateTeacher, (err, result) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.error(error)
    }
};


// DELETE TEACHER
exports.deleteTeacher = async (req, res) => {
    let id = req.params.id;

    try {
        Teacher.deleteOne({ _id: id }, (err, result) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.error(error)
    }
};
