const router = require("express").Router();

const {
    registerStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getStudent,
    getStudentUsingUserID
} = require('../controllers/studentController');


router.route("/").get(getAllStudents);
router.route("/").post(registerStudent);
router.route("/:id").get(getStudent);
router.route("/:id").put(updateStudent);
router.route("/:id").delete(deleteStudent);

module.exports = router;
