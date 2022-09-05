const express = require('express')
const router = express.Router();


const { 
    newEnroll
   
 } = require('../controllers/enrolledController')

 router.route('/enrolle/new').post(newEnroll);

 module.exports = router;