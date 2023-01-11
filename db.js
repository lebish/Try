

const anvironmentService = require("./services/anvironment.service");

var Sequelize = require('sequelize');

var db = new Sequelize('leibish', anvironmentService.dbUserName(), anvironmentService.dbPassword(), {
    host: anvironmentService.dbHost() ,
   
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
  });


  db.close();

  module.exports = {db};


  