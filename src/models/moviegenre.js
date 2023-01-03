'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movieGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie,Genre}) {
      // define association here
      this.belongsTo(Movie, {
        foreignKey: 'idMovie',
      });
      this.belongsTo(Genre, {
        foreignKey: 'idGenre',
      });
      
    }
  }
  movieGenre.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    idMovie: {
      type: DataTypes.UUID,
      references: {
        model: 'Movie',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    idGenre: {
      type: DataTypes.UUID,
      references: {
        model: 'Genre',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'movieGenre',
  });
  return movieGenre;
};