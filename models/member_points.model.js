const { DataTypes } = require("sequelize");
const { db } = require("../db.js");

const { member } = require("../models/member.model");

var memberPoints = db.define('membersPoints', {
mpId: {type: DataTypes.INTEGER, primaryKey: true},
mpMemberId: {type: DataTypes.INTEGER,
    references: {
    model: member,
    key: 'member_id'
  }},
mpAddedByMemberId: {type: DataTypes.INTEGER,
  references: {
  model: member,
  key: 'member_id'
}},
mpRemovedByMemberId: {type: DataTypes.INTEGER,
  references: {
  model: member,
  key: 'member_id'
}},
mpPoints: {type: DataTypes.INTEGER},
mpDescription: {type: DataTypes.STRING},
mpPointsType: {type: DataTypes.STRING},
mpOrderId: {type: DataTypes.INTEGER},
mpDateAdded: {type: DataTypes.DATE},
mpDateExpired: {type: DataTypes.DATE},
mpDateRemoved: {type: DataTypes.DATE},
mpLastUpdate: {type: DataTypes.DATE},
},{
    underscored: true,
    createdAt: false,
    updatedAt: false
});

member.hasMany(memberPoints, {foreignKey: 'mpMemberId'});
memberPoints.belongsTo(member, {foreignKey: 'mpMemberId'}, {as: 'mpMemberId'});
memberPoints.belongsTo(member, {foreignKey: 'mpAddedByMemberId'}, {as: 'mpAddedByMemberId'});
memberPoints.belongsTo(member, {foreignKey: 'mpRemovedByMemberId'}, {as: 'mpRemovedByMemberId'});

module.exports = {memberPoints};