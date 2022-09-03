const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require('path');


const app = express();

app.use(cors());
app.use(bodyParser.json());


const StudentRouter = require("./routes/student");
const TeacherRouter = require("./routes/teacher");


app.use("/api/v1/students", StudentRouter);
app.use("/api/v1/teacher", TeacherRouter);


module.exports = app;
