const express = require("express");
const authValidationMiddleware = require("../middlewares/auth.validation.middleware");
const authPermissionMiddleware = require("../middlewares/auth.permission.middleware");
const memberPointsController = require("../controllers/member_points.controller");

const router = express.Router();

router.get("/", [
  authValidationMiddleware.validJWTNeeded,
  authPermissionMiddleware.minimumPermissionLevelRequired(2147483647),
  authPermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
  memberPointsController.getAllMemberPoints
]);

router.get("/list/:mpMemberId", memberPointsController.getMemberPointsOfMember);

router.get("/sum/:mpMemberId", [  
  authValidationMiddleware.validJWTNeeded,
  authPermissionMiddleware.minimumPermissionLevelRequired(124),
  memberPointsController.getBlanceMemberPointsOfMember
]);

//router.get("/:id", memberPointsController.getOneMemberPoints);

// router.post("/", memberPointsController.createNewMemberPoints);

// router.patch("/:id", memberPointsController.updateOneMemberPoints);

// router.delete("/:id", memberPointsController.deleteOneMemberPoints);

module.exports = router;