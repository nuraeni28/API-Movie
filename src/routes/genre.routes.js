const express = require('express');
const router = express.Router();
const Genre= require('../controllers/genre.controllers');

router.get("/genre",Genre.GetAllGenre);
router.post("/genre",Genre.AddGenre);
router.put("/genre/:id",Genre.UpdateGenre);
router.delete("/genre/:id",Genre.DeleteGenre);

module.exports=router;