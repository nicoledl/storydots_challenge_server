const { DataTypes } = require('sequelize')
const sequelize = require('../connection')

const User = sequelize.define('User', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
  },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  }
);

module.exports = User;