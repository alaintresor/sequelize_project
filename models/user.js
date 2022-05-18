const Sequelize = require("sequelize");

const db = require("../config/db.config");

const User = db.define("Users", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});


module.exports = User;
