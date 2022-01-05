const {Sequelize} = require('sequelize');
const connection = require('../database/database');


// Employee DB Model
const Hardware = connection.define('hardware', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  has_equipament: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  equipament_returned: {
    type: Sequelize.BOOLEAN,
  },


});

Employees.sync();


module.exports = Employees;
