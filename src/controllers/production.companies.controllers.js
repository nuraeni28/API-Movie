const models = require('../models');

const GetAllproduction = async (req, res)=>{
    const productionCompanies = await models.ProductionCompanies.findAll({});
    res.status(200).send({
        status : 200,
        message : "Success",
        data: productionCompanies
    }) ;
};
const AddProductionCompanies =  async (req, res)=>{
    models.ProductionCompanies.findOne({where:{name:req.body.name}}).then(result => {
        if(result){
            res.status(409).json({status:400,
                message: "Production Company already exists!",
            });
        }
        else{
            const ProductionCompanies = {
                name: req.body.name,
                originCountry:req.body.originCountry,
            }
            models.ProductionCompanies.create(ProductionCompanies).then(result => {
            res.status(201).json({status:201,
                message: "Production Company is added",
                data:ProductionCompanies
            });
        }).catch(error => {
            res.status(500).json({status:500,
                message: "Something went wrong!",
            });
        });
    }
    });
}

    // try {
    //     const {name, originCountry} = req.body;
    //     const productionCompanies = await models.ProductionCompanies.create({
    //         name,
    //         originCountry
    //     });
    //     res.status(200).send({status:200, message :" Production Companies is Added", data : productionCompanies});
        
    // } catch (error) {
    //     res.status(500).send({status:500, message :error.message });
    // }

const UpdateProductionCompanies =  async (req, res)=>{
    try {
        const id_production     = req.params.id;
        const {name, originCountry} = req.body;
        const productionCompanies = await models.ProductionCompanies.update({
            name,
            originCountry
        },{
            where:{
                id : id_production,
            },
        });
        res.status(200).send({status:200, message :" Production Companies is Updated", data : productionCompanies });
        
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
};
const DeleteProductionCompanies =  async (req, res)=>{
    try {
        const id_production = req.params.id;
        await models.ProductionCompanies.destroy({
            where:{
                id : id_production,
            },
        });
        res.status(200).send({status:200, message :"Production Companies is Deleted"});    
    } catch (error) {
        res.status(500).send({status:500, message :error.message });
    }
};

module.exports={GetAllproduction, AddProductionCompanies, UpdateProductionCompanies, DeleteProductionCompanies};