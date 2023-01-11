const { DataTypes } = require("sequelize");
const { db } = require("../db.js");
const { member } = require("./member.model.js");


//not right types
var order = db.define('orders', {
  orderId: {type: DataTypes.INTEGER, primaryKey: true},
  orderLang: {type: DataTypes.STRING},
  orderStatus: {type: DataTypes.STRING},
  orderEmailStatus: {type: DataTypes.STRING},
  orderPartnershipsStatus: {type: DataTypes.STRING},
  orderType: {type: DataTypes.STRING},
  orderSalePersonId: {type: DataTypes.INTEGER},
  orderSalePersonId_2nd: {type: DataTypes.INTEGER},
  orderBrokerId: {type: DataTypes.TINYINT},
  orderIsCommisionPaid: {type: DataTypes.TINYINT},
  orderMemberId: {type: DataTypes.INTEGER,
    references: {
    model: member,
    key: 'member_id'
  }},
  orderMemberIsNew: {type: DataTypes.TINYINT},
  orderAffiliateTransactionId: {type: DataTypes.STRING},
  orderBillingAddressId: {type: DataTypes.INTEGER},
  orderShippingAddressId: {type: DataTypes.INTEGER},
  orderShippingPersonalIdRequired: {type: DataTypes.TINYINT},
  orderContactFrom: {type: DataTypes.STRING},
  orderShippingDate: {type: DataTypes.DATE},
  orderTrackingNumber: {type: DataTypes.STRING},
  orderInvoiceId: {type: DataTypes.INTEGER},
  orderPaymentMethod: {type: DataTypes.STRING},
  orderPaymentApi: {type: DataTypes.STRING},
  orderSaleId: {type: DataTypes.INTEGER},
  orderSaleType: {type: DataTypes.STRING},
  orderDiscountType: {type: DataTypes.STRING},
  orderDiscount: {type: DataTypes.FLOAT},
  orderCouponId: {type: DataTypes.INTEGER},
  orderAwardPoints: {type: DataTypes.INTEGER},
  orderTaxPercent: {type: DataTypes.FLOAT},
  orderTotal: {type: DataTypes.FLOAT},
  orderTotalPaid: {type: DataTypes.FLOAT},
  orderTotalRefunded: {type: DataTypes.FLOAT},
  orderTotalExchanged: {type: DataTypes.FLOAT},
  orderIsDeleted: {type: DataTypes.TINYINT},
  orderIsOnline: {type: DataTypes.TINYINT},
  orderIsInternetSale: {type: DataTypes.TINYINT},
  orderIsOfferSale: {type: DataTypes.TINYINT},
  orderIsDirectLead: {type: DataTypes.TINYINT},
  orderRemarks: {type: DataTypes.TEXT},
  orderInternalRemarks: {type: DataTypes.TEXT},
  orderSiteRemarks: {type: DataTypes.TEXT},
  orderClientRemarks: {type: DataTypes.TEXT},
  orderRemarkBillingDept: {type: DataTypes.TEXT},
  orderRemarkJewelryDept: {type: DataTypes.TEXT},
  orderRemarkStockDept: {type: DataTypes.TEXT},
  orderSource: {type: DataTypes.STRING},
  orderContactReason: {type: DataTypes.STRING},
  orderGaContactId: {type: DataTypes.INTEGER},
  orderContactId: {type: DataTypes.INTEGER},
  orderClosingVia: {type: DataTypes.CHAR},
  orderIp: {type: DataTypes.STRING},
  orderAttemptsCounter: {type: DataTypes.INTEGER},
  orderNotificationTpStatus: {type: DataTypes.TINYINT},
  orderNotificationTpUpdated: {type: DataTypes.DATE},
  orderDateAdded: {type: DataTypes.DATE},
  orderReportDate: {type: DataTypes.DATE},
  orderLastUpdate: {type: DataTypes.TIME},
  orderFraudStatus: {type: DataTypes.TINYINT},  
},{
    underscored: true,
    createdAt: false,    
    updatedAt: false
});

member.hasMany(order, {foreignKey: 'orderMemberId'});
order.belongsTo(member, {foreignKey: 'orderMemberId'}, {as: 'orderMemberId'});

module.exports = {order};