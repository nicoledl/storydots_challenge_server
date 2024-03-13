const {Sequelize, ConnectionError} = require('sequelize');
const {database, username, password, host, dialect, port} = require('../config/db');

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  port: port
});

const connectToDatabase = async () => {
  console.log(database, username, password, host, dialect, port);
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw new ConnectionError('Data base is not available')
  }
};

connectToDatabase();
  
module.exports = sequelize;
