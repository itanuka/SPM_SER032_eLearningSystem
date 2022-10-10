const router = require("express").Router()
const path = require("path")

const CourseMaterial = require("../models/CourseMaterial")
const multer = require("multer")
const { updateCourseMaterial, getCourseMaterial, getSingleCourseMaterial, deleteCourseMaterial, getSingleCourseMaterialByCourseID } = require("../controllers/courseMaterialController")


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../frontend/public/uploads/course_material")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})


const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, '../frontend/public/uploads/course_material');
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


router.post("/new_course_material", upload.single("material"), async (req, res) => {
    try {
        
        const { title, description, category, courseID } = req.body
        const { path, mimetype } = req.file;
        const newCourseMaterial = new CourseMaterial({
            title: title,
            description: description,
            category: category,
            courseID: courseID,
            file_path: path,
            file_mimetype: mimetype
        })
    
        await newCourseMaterial.save()
        res.json(newCourseMaterial)
        
    } catch (error) {
        res.json(error)
    }
})

router.put("/update_course_material/:id", updateCourseMaterial)
router.get("/get_course_materials", getCourseMaterial)
router.get("/get_single_course_material/:id", getSingleCourseMaterial)
router.get("/get_single_course_material_by_course/:courseID", getSingleCourseMaterialByCourseID)
router.delete("/delete_course_material/:id", deleteCourseMaterial)

router.get('/download/course_material/:id', async (req, res) => {
  try {
    const file = await CourseMaterial.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });

    res.sendFile(path.join(__dirname, '../', file.file_path));
    

  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

module.exports = router
