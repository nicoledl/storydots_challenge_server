const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Product = sequelize.define('Product', 
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
    description:{
      type: DataTypes.STRING,
      validate: {
        max: {
          args: [200],
          msg: "The description cannot be more than 200 characters.",
        },
      },
    },
    image_url:{
      type: DataTypes.STRING,
    },
    price:{
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'Products'
  }
);

module.exports = Product;