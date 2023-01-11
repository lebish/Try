const express = require("express");
const verifyUserMiddleware = require("../middlewares/verify.user.middleware");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post('/', [
    verifyUserMiddleware.hasAuthValidFields,
    verifyUserMiddleware.isPasswordAndApiUserMatch,
    authController.login
]);

module.exports = router;