const router = require("express").Router();

const {
    registerTeacher,
    getAllTeachers,
    updateTeacher,
    deleteTeacher,
    getTeacher
} = require('../controllers/teacherController');


router.route("/").get(getAllTeachers);
router.route("/").post(registerTeacher);
router.route("/:id").get(getTeacher);
router.route("/:id").put(updateTeacher);
router.route("/:id").delete(deleteTeacher);

module.exports = router;
