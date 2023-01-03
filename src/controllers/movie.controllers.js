const models = require('../models');
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
const path = require('path');

const GetAllMovie = async (req, res)=>{
    try {
        const movie = await models.Movie.findAll({});
        res.status(200).send({
            status : 200,
            message : "Success",
            data: movie
        }) ; 
    } catch (error) {
        res.status(500).send({status:500, message :error.message }); 
    }
    
};
const GetDetailMovie = async (req, res)=>{
    try {
        const id_movie = req.params.id
        const movieDetail = await models.Movie.findOne({where:{id:id_movie}});
        const movie = await models.Movie.findAll({
        include: [
            { model: models.User, as: 'User', where:{id:movieDetail.userId}},
            {models: models.movieGenre, as:'Genres', where:{idMovie:id_movie}} ,
            { model: models.ProductionCompanies, where:{id:movieDetail.productionCompanies}}], where:{id:id_movie}
    });
    console.log(movie)
    return res.status(200).send({
        status : 200,
        message : "Success",
        data:movie
    }) ;
    } catch (error) {
        
    }
    
};
const AddMovie =  async (req, res)=>{
    models.Movie.findOne({where:{title:req.body.title}}).then(result => {
        if(result){
            res.status(409).json({status:400,
                message: "Movie already exists!",
            });
        }
        else{
            const Movie = {
                title: req.body.title,
                genre: req.body.genre,
                overview: req.body.overview,
                popularity: req.body.popularity,
                releaseDate: req.body.releaseDate,
                productionCompanies: req.body.productionCompanies,
                userId: req.body.userId,
                poster: req.file.filename,   
                
            }
            models.Movie.create(Movie).then(result => {
            res.status(201).json({status:201,
                message: "Movie is added",
                data:Movie
            });
        }).catch(error => {
            res.status(500).json({status:500,
                message: "Something went wrong!",
            });
        });
    }
    });
    // try {
    //     const genre= req.body.genre;
    //     console.log(genre)
    //     const {title,overview,popularity,releaseDate,productionCompanies,userId} = req.body;
    //     const poster=req.file.filename;
    //     // for (i = 0; i < genre.length; i++) {
    //     const movie = await models.Movie.create({
    //         title,
    //         genre,
    //         overview,
    //         popularity,
    //         releaseDate,
    //         productionCompanies,
    //         userId,
    //         poster
    //     });    
    // // } 
    //     res.status(200).send({status:200, message :" Movie is Added", data : movie});
        
    // } catch (error) {
    //     res.status(500).send({status:500, message :error.message });
    // }
};
const searchMovie = async (req, res)=>{
    try {
    const genre = req.body.genre
    const movie = await models.Movie.findAll();
    const filter = movie.filter((item) => {return (item.genre.indexOf(genre)>0)})
    console.log(filter)
    res.status(200).send({
        status : 200,
        message : "Success",
        data:filter
    }) ;
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
    
};

module.exports={GetAllMovie, AddMovie, GetDetailMovie, searchMovie};