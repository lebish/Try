
const { DataTypes } = require("sequelize");
const { db } = require("../db.js");

const { order } = require("./order.model.js");
const { productInfo } = require("./product_info.model.js");



var ordersItems = db.define('orders_items', {

  oi_row_id: {type: DataTypes.INTEGER, primaryKey: true},
  oi_order_id: {type: DataTypes.INTEGER,
    references: {
    model: order,
    key: 'order_id'
  }},
  oiReferenceOrderId: {type: DataTypes.INTEGER},
  oiObjectType: {type: DataTypes.STRING,
    references: {
    model: productInfo,
    key: 'pi_product_type'
  }},
  oiObjectId: {type: DataTypes.INTEGER,
    references: {
    model: productInfo,
    key: 'pi_product_id'
  }},
  oiSetInd: {type: DataTypes.TINYINT},
  oiIsReserved: {type: DataTypes.TINYINT},
  oiPriceQuoteId: {type: DataTypes.INTEGER},
  oiItemSku: {type: DataTypes.STRING},
  oiItemDesc: {type: DataTypes.TEXT},
  oiItemAdditional_info: {type: DataTypes.STRING},
  oiItemPrice: {type: DataTypes.FLOAT},
  oiListedPrice: {type: DataTypes.FLOAT},
  oiItemPpc: {type: DataTypes.FLOAT},
  oiItemTotal: {type: DataTypes.FLOAT},
  oiStatus: {type: DataTypes.STRING},
  oiDateAdded: {type: DataTypes.DATE},
  oiLastUpdate: {type: DataTypes.TIME},
  
},{
    underscored: true,
    createdAt: false,    
    updatedAt: false
});

order.hasMany(ordersItems, {foreignKey: 'oiOrderId'});
ordersItems.belongsTo(order, {foreignKey: 'oiOrderId'});


productInfo.hasOne(ordersItems);
ordersItems.belongsTo(productInfo, {foreignKey:  'oiObjectType'});
ordersItems.belongsTo(productInfo, {foreignKey: 'oiObjectId'});


module.exports = {ordersItems};