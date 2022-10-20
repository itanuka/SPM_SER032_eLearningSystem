const router = require("express").Router();
const multer = require("multer");

const {
    registerTeacher,
    getAllTeachers,
    updateTeacher,
    deleteTeacher,
    getTeacher,
    teacherChangePassword
} = require('../controllers/teacherController');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, '../frontend/public/uploads');
        },
        filename(req, file, cb) {
            cb(null, `${new Date().getTime()}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 100000000 // max file size 1MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
            return cb(
                new Error(
                    'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
                )
            );
        }
        cb(undefined, true); // continue with upload
    }
});


router.route("/").get(getAllTeachers);
router.route("/").post(upload.single("file"), registerTeacher);
router.route("/:id").get(getTeacher);
router.route("/:id").put(updateTeacher);
router.route("/:id").delete(deleteTeacher);
router.route("/teacherChangePassword/:id").patch(teacherChangePassword);

module.exports = router;
