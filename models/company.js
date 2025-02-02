'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trip, Vehicle}) {
      // define association here
      this.hasMany(Vehicle, {foreignKey: "company_id"})
      this.belongsTo(Trip, {foreignKey: "trip_id"})
    }
  }
  Company.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};