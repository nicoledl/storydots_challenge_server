const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Brand = sequelize.define('Brand', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    logo_url:{
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Brand',
    tableName: 'Brands'
  }
);

module.exports = Brand;