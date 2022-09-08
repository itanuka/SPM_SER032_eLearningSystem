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
const CourseRouter = require('./routes/course')
const EnrolledRouter = require('./routes/enrolle')
const { default: mongoose } = require("mongoose");

app.use('/api/v1/books', BookRouter);
app.use("/api/v1/students", StudentRouter);
app.use("/api/v1/teacher", TeacherRouter);
app.use("/api/v1/courses", CourseRouter )
app.use("/api/v1/enrolle", EnrolledRouter )


module.exports = app;
