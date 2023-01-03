const express = require('express');
const router = express.Router();
const movieGenre= require('../controllers/movieGenre.controllers');

router.get("/movie-genre/:id",movieGenre.getAllMovieGenre);
router.post("/movie-genre",movieGenre.addMovieGenre);
// router.get("/movie-genre/:id",movie.GetDetailMovie);
module.exports=router;