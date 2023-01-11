// In src/services/order.js

const { order } = require("../models/order.model");
const { productInfo } = require("../models/product_info.model");

const sequelize = require("sequelize");
const { ordersItems } = require("../models/orders_items.model");

class Order {

// static async getAllMembers() {
//   return member.findAll({where: {isNewsletter: 1}}, { raw: true, nest: true });

// };
  
// static async getOneOrder(req){

//   return member.findByPk(req.params.memberId);
//   };

static async getAllOrdersWithOrderItems(req) {
  var AllOrdersWithOrderItems = order.findAll({
    attributes: [['order_id','orderId']],
    include: [{
      model: ordersItems,
     }],
    group: ['order_member_id'],

    //where: {orderReportDate: }
  });

  return AllOrdersWithOrderItems;
};
  
  static async createNewMember() {
    res.send("Create a new member");
  };
  
  static async updateOneMember() {
    res.send("Update an existing member");
  };
  
  static async deleteOneMember() {
    res.send("Delete an existing member");
  };
}

  module.exports = Order;