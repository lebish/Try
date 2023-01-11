const express = require("express");
const authValidationMiddleware = require("../middlewares/auth.validation.middleware");
const authPermissionMiddleware = require("../middlewares/auth.permission.middleware");
const memberController = require("../controllers/member.controller");

const router = express.Router();

router.get("/list", [  
  authValidationMiddleware.validJWTNeeded,
  authPermissionMiddleware.minimumPermissionLevelRequired(124),
  memberController.getAllMembers
]);

//router.get("/:memberId", memberController.getOneMember);

// router.post("/", memberController.createNewMember);

// router.patch("/:memberId", memberController.updateOneMember);

// router.delete("/:memberId", memberController.deleteOneMember);

module.exports = router;