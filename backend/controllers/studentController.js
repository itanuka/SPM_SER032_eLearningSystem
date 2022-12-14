const bcrypt = require("bcryptjs");
const Student = require("../models/Student.js");

exports.registerStudent = async (req, res) => {

    let { firstName, lastName, gender, dob, contactNo, email, address, password } = req.body;
    const { path, mimetype } = req.file;
    password = await bcrypt.hash(password, 10);

    const newStudent = new Student({
        firstName,
        lastName,
        gender,
        dob,
        contactNo,
        email,
        address,
        password,
        file_path: path,
        file_mimetype: mimetype
    });

    newStudent.save()
    res.json(newStudent)
};


// GET ALL STUDENTS
exports.getAllStudents = async (req, res) => {

    try {
        Student.find({}, (err, result) => {
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



// GET A STUDENT
exports.getStudent = async (req, res) => {
    let id = req.params.id;

    try {
        Student.findOne({ _id: id }, (err, result) => {
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




// UPDATE STUDENT DETAILS
exports.updateStudent = async (req, res) => {

    let id = req.params.id;

    const { firstName, lastName, gender, dob, contactNo, email, address } = req.body;

    const updateStudent = {
        firstName,
        lastName,
        gender,
        dob,
        contactNo,
        email,
        address
    };

    try {
        Student.updateOne({ _id: id }, updateStudent, (err, result) => {
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


// DELETE STUDENT
exports.deleteStudent = async (req, res) => {
    let id = req.params.id;

    try {
        Student.deleteOne({ _id: id }, (err, result) => {
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

exports.studentChangePassword = async (req, res) => {

    let id = req.params.id;

    const password = await bcrypt.hash(req.body.password, 10);
    req.body.password = password;

    const student = await Student.findOne({ _id: id });
    Object.assign(student, req.body)
    student.save();
    res.send(student);

};
