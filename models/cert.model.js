const { DataTypes } = require("sequelize");
const { db } = require("../db.js");
const { productInfo } = require("./product_info.model.js");

var cert = db.define('certs', {
  certId: {type: DataTypes.INTEGER, primaryKey: true},
  certObjectType: {type: DataTypes.STRING,
    references: {
    model: productInfo,
    key: 'pi_product_type'
  }},
  certObjectId: {type: DataTypes.INTEGER,
    references: {
    model: productInfo,
    key: 'pi_product_id'
  }},
  certType: {type: DataTypes.STRING},
  certNumber: {type: DataTypes.STRING},
  certFilename: {type: DataTypes.STRING},
  certIsDefault: {type: DataTypes.TINYINT},
  certDateAdded: {type: DataTypes.TIME},
  certLastUpdate: {type: DataTypes.TIME}
},{
    underscored: true,
    createdAt: false,
    updatedAt: false
});


productInfo.hasOne(cert);
cert.belongsTo(productInfo, {foreignKey:  'certObjectType'});
cert.belongsTo(productInfo, {foreignKey: 'certObjectId'});



module.exports = {cert};