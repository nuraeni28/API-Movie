const models = require('../models');

const getAllMovieGenre = async (req, res)=>{
    try {
        const idmovie = req.params.id
        const movie = await models.Movie.findOne({where:{id:idmovie}});
     
        const genre = await models.movieGenre.findAll({
            include: 
                models.Genre
        });
  const genreMap = genre.map((item) => item.Genre)
  const movieParse = JSON.parse(JSON.stringify(movie))
  const merge =  Object.assign(movieParse,{'Genre':genreMap})
       return  res.status(200).send({
            status : 200,
            message : "Success",
            data:merge
        }) ; 
    } catch (error) {
        res.status(500).send({status:500, message :error.message }); 
    }
    
};
const addMovieGenre = async (req, res)=>{
    try {

        const {idMovie,idGenre} = req.body;
        const movieGenre = await models.movieGenre.create({
           idMovie,
           idGenre
        });    
    // } 
        res.status(200).send({status:200, message :" Movie-Genre is Added", data : movieGenre});
        
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
    
};


module.exports={getAllMovieGenre, addMovieGenre};
