
const orderService = require("../services/order.service");

class Order {

  static async getAllOrdersWithOrderItems(req, res) {
    orderService.getAllOrdersWithOrderItems(req).then((allOrders) => {
      res.status(200).send({ allOrders: allOrders })
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };


}

module.exports = Order;