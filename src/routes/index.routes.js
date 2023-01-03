const router = require('express').Router();

const auth = require('./auth.routes');
const genre = require('./genre.routes');
const productionCompanies = require('./production.companies.routes');
const movie = require('./movie.routes');
const movieGenre = require('./movieGenre.routes');

router.post('/login', auth);
router.post('/register', auth);

router.get('/production-companies', productionCompanies);
router.post('/production-companies', productionCompanies);
router.put('/production-companies/:id', productionCompanies);
router.delete('/production-companies/:id', productionCompanies);

router.get('/genre', genre);
router.post('/genre', genre);
router.put('/genre/:id', genre);
router.delete('/genre/:id', genre);

router.get("/movie",movie);
router.post("/movie/search",movie);
router.post("/movie",movie);
router.get("/movie/:id",movie);


router.get("/movie-genre/:id",movieGenre);
router.post("/movie-genre",movieGenre);



module.exports=router;

