// In src/services/member.js

const { member } = require("../models/member.model");
const { memberPoints } = require("../models/member_points.model");

const sequelize = require("sequelize");

class Member {

static async getOneMember(req){

  return member.findByPk(req.params.memberId);
  };

static async getAllMembers(req) {
  var allMembers = member.findAll({
    attributes: [['member_id','memberId'], ['email','email'], ['first_name','firstName'], ['last_name','lastName'], ['mobile','mobile'], [sequelize.fn('SUM', sequelize.col('mp_points')), 'mpPoints'], ['marketing_id','marketingId']],
    include: [{
      model: memberPoints,
      required: false,
      attributes:[],
      where: {
        mpRemovedByMemberId: 0
      },
     }],
    group: ['member_id'],

    where: {
     
        [sequelize.Op.and]: [
          { marketingId: {[sequelize.Op.not]: null}},
          { marketingId: {[sequelize.Op.ne]: ""}},
        ],
      
      isNewsletter: 1}
  });

  return allMembers;
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

  module.exports = Member;