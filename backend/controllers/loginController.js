const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");

exports.login = async (req, res) => {

    let { email, password } = req.body;

    try {

        const student = await Student.findOne({ email: email });
        const isPasswordValid = await bcrypt.compare(password, student.password);

        if (isPasswordValid) {

            let token;

            if (student.email === "admin@elearning.lk") {
                token = jwt.sign(
                    {
                        id: student._id,
                        email: student.email,
                        role: "Admin",
                    },
                    process.env.JWT_SECRET
                );

                return res.json({
                    status: "ok",
                    token: token,
                    role: "Admin"
                });

            }

            token = jwt.sign(
                {
                    id: student._id,
                    email: student.email,
                    role: "Student",
                },
                process.env.JWT_SECRET
            );


            return res.json({
                status: "ok",
                token: token,
                role: "Student"
            });
        }
        else {
            return res.json({ status: "Invalid Login", token: false });
        }

    } catch (error) {

        try {

            const teacher = await Teacher.findOne({ email: email });
            const isPasswordValid = await bcrypt.compare(password, teacher.password);

            if (isPasswordValid) {
                let token;
                token = jwt.sign(
                    {
                        id: teacher._id,
                        email: teacher.email,
                        role: "Teacher",
                    },
                    process.env.JWT_SECRET
                );


                return res.json({
                    status: "ok",
                    token: token,
                    role: "Teacher"
                });
            }
            else {
                return res.json({ status: "Invalid Login", token: false });
            }

        } catch (error) {
            return res.json({ status: "Invalid Login", token: false });
        }
    }





};