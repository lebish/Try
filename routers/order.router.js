

const express = require("express");
const authValidationMiddleware = require("../middlewares/auth.validation.middleware");
const authPermissionMiddleware = require("../middlewares/auth.permission.middleware");
const orderController = require("../controllers/order.controller");

const router = express.Router();


router.get("/items", [  
  authValidationMiddleware.validJWTNeeded,
  authPermissionMiddleware.minimumPermissionLevelRequired(124),
  orderController.getAllOrdersWithOrderItems
]);


// router.get("/:orderId", [  
//   authValidationMiddleware.validJWTNeeded,
//   authPermissionMiddleware.minimumPermissionLevelRequired(124),
//   orderController.getOrdersWithOrderItems
// ]);


module.exports = router;