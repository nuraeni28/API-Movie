'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, ProductionCompanies, movieGenre}) {
      // 
      // define association here
      this.hasMany(movieGenre, {
        foreignKey: 'idMovie',
      });
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
      this.belongsTo(ProductionCompanies, {
        foreignKey: 'productionCompanies',
      });
    }
  }
  Movie.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    overview: DataTypes.STRING,
    popularity: DataTypes.STRING,
    releaseDate: DataTypes.DATEONLY,
    productionCompanies: {
      type: DataTypes.UUID,
      references: {
        model: 'ProductionCompanies',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};