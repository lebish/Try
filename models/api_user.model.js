const { DataTypes } = require("sequelize");
const { db } = require("../db.js");

var apiUser = db.define('apiUsers', {

  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  permissionLevel: { type: DataTypes.INTEGER }
}, {
  underscored: true,
  createdAt: false,
  updatedAt: false
});

apiUser.sync();
module.exports = { apiUser };