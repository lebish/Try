const { DataTypes } = require("sequelize");
const { db } = require("../db.js");

var member = db.define('members', {
  memberId: {type: DataTypes.INTEGER, primaryKey: true},
  lang: {type: DataTypes.STRING},
  memberGuestId: {type: DataTypes.STRING},  
  handelingBoMemberId: {type: DataTypes.INTEGER},
  firstName: {type: DataTypes.STRING},
  lastName: {type: DataTypes.STRING},
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    }
  },
  companyName: {type: DataTypes.STRING},
  gender: {type: DataTypes.ENUM('m', 'f')},
  email: {type: DataTypes.STRING},
  email_2nd: {type: DataTypes.STRING},
  username: {type: DataTypes.STRING},
  nicknameEbay: {type: DataTypes.STRING},
  nicknameFacebook: {type: DataTypes.STRING},
  personalId: {type: DataTypes.STRING},
  viewedContactId: {type: DataTypes.INTEGER},
  phone: {type: DataTypes.STRING},
  phone2: {type: DataTypes.STRING},
  mobile: {type: DataTypes.STRING},
  fax: {type: DataTypes.STRING},
  password: {type: DataTypes.STRING},
  hashKey: {type: DataTypes.STRING},
  birthday: {type: DataTypes.DATE},
  anniversary: {type: DataTypes.DATE},
  countryId: {type: DataTypes.INTEGER},
  state: {type: DataTypes.STRING},
  address1: {type: DataTypes.STRING},
  address2: {type: DataTypes.STRING},
  city: {type: DataTypes.STRING},
  zipcode: {type: DataTypes.STRING},
  status: {type: DataTypes.STRING},
  registrationType: {type: DataTypes.STRING},
  registrationIp: {type: DataTypes.STRING},
  isDeleted: {type: DataTypes.TINYINT(1)},
  isNewsletter: {type: DataTypes.TINYINT(1)},
  memberType: {type: DataTypes.TINYINT(1)},
  isBoMember: {type: DataTypes.TINYINT(1)},
  isToChangePassword: {type: DataTypes.TINYINT(1)},
  isVault: {type: DataTypes.TINYINT(1)},
  totalPurchased: {type: DataTypes.INTEGER},
  notes: {type: DataTypes.STRING},
  photo: {type: DataTypes.STRING},
  department: {type: DataTypes.STRING},
  memberSource: {type: DataTypes.STRING},
  affiliateId: {type: DataTypes.STRING},
  affiliateDate: {type: DataTypes.DATE},
  whereHearAboutUs: {type: DataTypes.TINYINT(1)},
  accessories: {type: DataTypes.STRING},
  supplierClass: {type: DataTypes.STRING},
  supplierFantasyId: {type: DataTypes.STRING},
  supplierConfirmDate: {type: DataTypes.DATE},
  supplierTotalItems: {type: DataTypes.INTEGER},
  supplierSoldItems: {type: DataTypes.INTEGER},
  supplierReservedItems: {type: DataTypes.INTEGER},
  supplierAsRetailer: {type: DataTypes.TINYINT(1)},
  supplierNotifyEmail: {type: DataTypes.TINYINT(1)},
  marketingConfirmed: {type: DataTypes.TINYINT(1)},
  marketingId: {type: DataTypes.STRING},
  offerEmailNotice: {type: DataTypes.STRING},
  passwordChanged: {type: DataTypes.DATE},
  lastLogin: {type: DataTypes.DATE},
  dateAdded: {type: DataTypes.DATE},
  lastUpdate: {type: DataTypes.TIME},
},{
  underscored: true,
  createdAt: false,
  updatedAt: false
});

module.exports = {member};