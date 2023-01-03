'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductionCompanies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie}) {
      // define association here
      this.hasMany(Movie, {
        foreignKey: 'productionCompanies',
      });
    }
  }
  ProductionCompanies.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    originCountry: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductionCompanies',
  });
  return ProductionCompanies;
};