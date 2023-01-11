const express = require("express");
const apiUserController = require("../controllers/api_user.controller");
const authValidationMiddleware = require("../middlewares/auth.validation.middleware");
const authPermissionMiddleware = require("../middlewares/auth.permission.middleware");

const router = express.Router();

router.post("/", apiUserController.createNewApiUser);

router.delete("/:Id", [
  authValidationMiddleware.validJWTNeeded,
  authPermissionMiddleware.minimumPermissionLevelRequired(),
  apiUserController.deleteOneApiUser
]);

module.exports = router;