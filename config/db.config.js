const { Sequelize } = require('sequelize');
const dotenv =require('dotenv');
dotenv.config();


const sequelize = new Sequelize('sequelize_project', 'postgres', 'open', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports=sequelize
