const {Sequelize, ConnectionError} = require('sequelize');
const {database, username, password, host, dialect, port} = require('../config/db');

const sequelize = new Sequelize({dialect, host, port, database, username, password});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw new ConnectionError('Data base is not available')
  }
})();
  
module.exports = sequelize;