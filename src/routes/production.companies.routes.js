const express = require('express');
const router = express.Router();
const productionCompanies = require('../controllers/production.companies.controllers');

router.get("/production-companies",productionCompanies.GetAllproduction);
router.post("/production-companies",productionCompanies.AddProductionCompanies);
router.put("/production-companies/:id",productionCompanies.UpdateProductionCompanies);
router.delete("/production-companies/:id",productionCompanies.DeleteProductionCompanies);

module.exports=router;