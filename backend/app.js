const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require('path');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const BookRouter = require('./routes/book');
const StudentRouter = require("./routes/student");
const TeacherRouter = require("./routes/teacher");
const LoginRouter = require("./routes/login");

const CourseRouter = require('./routes/course')
const EnrolledRouter = require('./routes/enrolle')
const { default: mongoose } = require("mongoose");


app.use('/api/v1/books', BookRouter);
app.use("/api/v1/students", StudentRouter);
app.use("/api/v1/courses", CourseRouter)
app.use("/api/v1/teachers", TeacherRouter);
app.use("/api/v1/login", LoginRouter);
app.use("/api/v1/course", CourseRouter)
app.use("/api/v1/enrolle", EnrolledRouter)

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(BookRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
