const models = require('../models');

const GetAllGenre = async (req, res)=>{
    const genre = await models.Genre.findAll({});
    res.status(200).send({
        status : 200,
        message : "Success",
        data: genre
    }) ;
};
const AddGenre =  async (req, res)=>{
    models.Genre.findOne({where:{name:req.body.name}}).then(result => {
        if(result){
            res.status(409).json({
                message: "Genre already exists!",
            });
        }else{
            const genre = {
                name: req.body.name,
            }
            models.Genre.create(genre).then(result => {
                res.status(201).json({status:201,
                    message: "Genre created successfully",
                });
            }).catch(error => {
                res.status(500).json({status:500,
                    message: "Something went wrong!",
                });
            });
        
            
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
};
const UpdateGenre =  async (req, res)=>{
    try {
        const id_genre = req.params.id;
        const {name} = req.body;
        const genre = await models.Genre.update({
            name
        },{
            where:{
                id : id_genre,
            },
        });
        res.status(200).send({status:200, message :" Genre is Updated", data : genre });
        
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
};
const DeleteGenre =  async (req, res)=>{
    try {
        const id_genre = req.params.id;
        await models.Genre.destroy({
            where:{
                id : id_genre,
            },
        });
        res.status(200).send({status:200, message :"Genre is Deleted"});    
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
};

module.exports={GetAllGenre,AddGenre,UpdateGenre,DeleteGenre};