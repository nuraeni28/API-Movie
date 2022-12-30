const express = require("express");
const router = express.Router();
const Usercontroller = require('../controllers/auth.controllers');
const { runValidation, validationRegister } = require('../middleware/validation.middleware');

router.post("/",validationRegister,runValidation,Usercontroller.AddUser);
router.post("/login",Usercontroller.Login);


module.exports=router;