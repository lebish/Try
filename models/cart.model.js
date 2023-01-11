const { DataTypes } = require("sequelize");
const { db } = require("../db.js");
const { member } = require("./member.model.js");

var cart = db.define('carts', {
  cartId: {type: DataTypes.INTEGER, primaryKey: true},
  cartMemberId: {type: DataTypes.STRING ,
    references: {
    model: member,
    key: 'member_id'
  }},
  cartMemberType: {type: DataTypes.SRING},
  cartContactId: {type: DataTypes.INTEGER},
  cartContents: {type: DataTypes.TEXT},
  cartVisits: {type: DataTypes.INTEGER},
  cartHash: {type: DataTypes.STRING},
  cartDateAdded: {type: DataTypes.DATE},
  cartLastUpdate: {type: DataTypes.TIME},
},{
    underscored: true,
    createdAt: false,
    updatedAt: false
});

member.hasMany(cart, {foreignKey: 'cartMemberId'});
cart.belongsTo(member, {foreignKey: 'cartMemberId'}, {as: 'cartMemberId'});

module.exports = {cart};