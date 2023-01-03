const express = require('express');
const router = express.Router();
const movie= require('../controllers/movie.controllers');
const {uploadImage} = require('../middleware/image.validation.middleware')

router.get("/movie",movie.GetAllMovie);
router.post("/movie",uploadImage,movie.AddMovie);
router.get("/movie/:id",movie.GetDetailMovie);
router.post("/movie/search",movie.searchMovie);
module.exports=router;