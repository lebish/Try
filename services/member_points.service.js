// In src/services/member.js

const { memberPoints } = require("../models/member_points.model");
const { member } = require("../models/member.model");
const sequelize = require("sequelize");


class MemberPoints {

  static async getAllMemberPoints() {

    return memberPoints.findAll({raw: true, nest: true });
  };

 
  static async getMemberPointsOfMember(req) {
    return memberPoints.findAll(
      { where: { mpMemberId: req.params.mpMemberId } },
      { raw: true, nest: true }
    );
  };

  static async getBlanceMemberPointsOfMember(mpMemberId) {
    var balanceMemberPointsOfMember = memberPoints.findAll({
      attributes: [[sequelize.fn('SUM', sequelize.col('mp_points')), 'mpPoints']],
      where: {
        mpMemberId: mpMemberId,
        mpRemovedByMemberId: {
          [sequelize.ne]: null
        },
      },
    });

    return balanceMemberPointsOfMember;
  };

  static async getOneMemberPoints(mpId) {

    return memberPoints.findByPk(mpId);
  };

  static async createNewMemberPoints() {
    res.send("Create a new member points");
  };

  static async updateOneMemberPoints() {
    res.send("Update an existing member points");
  };

  static deleteOneMemberPoints() {
    res.send("Delete an existing member points");
  };

}

module.exports = MemberPoints;
