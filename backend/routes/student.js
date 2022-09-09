const router = require("express").Router();
const multer = require("multer");

const {
    registerStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getStudent,
} = require('../controllers/studentController');



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


router.route("/").get(getAllStudents);
router.route("/").post(upload.single("file"), registerStudent);
router.route("/:id").get(getStudent);
router.route("/:id").put(updateStudent);
router.route("/:id").delete(deleteStudent);

module.exports = router;
