const { DataTypes } = require("sequelize");
const { db } = require("../db.js");

const { member } = require("../models/member.model");

var productInfo = db.define('product_info', {
 
  piProductType: {type: DataTypes.STRING, primaryKey: true},
  piProductId: {type: DataTypes.INTEGER, primaryKey: true},
  piSoldToMemberId: {type: DataTypes.INTEGER,
    references: {
    model: member,
    key: 'member_id'
  }},
  piStatus: {type: DataTypes.ENUM('active', 'inactive', 'pending', 'erpStock')},
  piName: {type: DataTypes.STRING},
  piMarketingName: {type: DataTypes.STRING},
  piSku: {type: DataTypes.STRING},
  piWeight: {type: DataTypes.FLOAT},
  piWeighpiMainImag: {type: DataTypes.STRING},
  piMainImage2: {type: DataTypes.STRING},
  piPriceStatus: {type: DataTypes.ENUM('showPrice', 'reserved', 'callForPrice')},
  piPriceOutTotal: {type: DataTypes.FLOAT},
  piPriceHardCost: {type: DataTypes.FLOAT},
  piPriceCost: {type: DataTypes.FLOAT},
  piPriceTrader: {type: DataTypes.FLOAT},
  piPriceInternet: {type: DataTypes.FLOAT},
  piPriceInternetCn: {type: DataTypes.FLOAT},
  piPriceIsLow: {type: DataTypes.TINYINT},
  piDiscountValue: {type: DataTypes.STRING},
  piLongDesc: {type: DataTypes.TEXT},
  piShortDesc: {type: DataTypes.TEXT},
  piBoxTitle: {type: DataTypes.STRING},
  piCollections: {type: DataTypes.STRING},
  piCollectionTitle: {type: DataTypes.STRING},
  piCollectionText: {type: DataTypes.TEXT},
  piCollectionTextBy: {type: DataTypes.STRING},
  piCategories: {type: DataTypes.STRING},
  piCertsTypes: {type: DataTypes.STRING},
  piOwnerCompanyId: {type: DataTypes.STRING},
  piErpSupplierId: {type: DataTypes.STRING},
  piErpSupplierFantasyId: {type: DataTypes.STRING},
  piErpSupplierStatus: {type: DataTypes.ENUM('active', 'memo','removed', 'soldForLeibish', 'soldBySupplier')},
  piErpSupplierStoneId: {type: DataTypes.STRING},
  piErpSupplierItemId: {type: DataTypes.STRING},
  piErpSupplierConfirmDate: {type: DataTypes.DATE},
  piErpSupplierUploadStatus: {type: DataTypes.ENUM('approved', 'pending','error')},
  piErpOverride: {type: DataTypes.ENUM('showPrice', 'reserved','callForPrice', 'sold')},
  piErpId: {type: DataTypes.STRING},
  piErpCatalogId: {type: DataTypes.STRING},
  piErpItemId: {type: DataTypes.STRING},
  piErpStyleId: {type: DataTypes.STRING},
  piErpStatus: {type: DataTypes.STRING},
  piErpLocation: {type: DataTypes.STRING},
  piErpLocationOrigin: {type: DataTypes.STRING},
  piErpCertLocation: {type: DataTypes.STRING},
  piErpCountry: {type: DataTypes.STRING},
  piErpPartnerId: {type: DataTypes.INTEGER},
  piErpPartnerDate: {type: DataTypes.DATE},
  piErpIsBox: {type: DataTypes.TINYINT},
  piErpBoxId: {type: DataTypes.INTEGER},
  piErpBoxStatus: {type: DataTypes.STRING},
  piErpPrefix: {type: DataTypes.STRING},
  piErpmemoOwner: {type: DataTypes.STRING},
  piIsEbay: {type: DataTypes.TINYINT},
  piIsEbayExport: {type: DataTypes.TINYINT},
  piIsIdexBid: {type: DataTypes.TINYINT},
  piIsMinisite: {type: DataTypes.TINYINT},
  piIsPromoted: {type: DataTypes.TINYINT},
  piIsDeleted: {type: DataTypes.TINYINT},
  piIsSold: {type: DataTypes.TINYINT},
  piIsShowOnFrontend: {type: DataTypes.TINYINT},
  piIs_360: {type: DataTypes.TINYINT},
  pi_360Url: {type: DataTypes.STRING},
  piIsSweet: {type: DataTypes.TINYINT},
  piIsVault: {type: DataTypes.TINYINT},
  piIsAccessProtected: {type: DataTypes.TINYINT},
  piIsReserved: {type: DataTypes.TINYINT},
  piVideoType: {type: DataTypes.STRING},
  piVideoCode: {type: DataTypes.STRING},
  piSeoUrl: {type: DataTypes.STRING},
  piSeoTitle: {type: DataTypes.STRING},
  piSeoMetaDesc: {type: DataTypes.TEXT},
  piSeoMetaKeywords: {type: DataTypes.TEXT},
  piEngravingType: {type: DataTypes.STRING},
  piEngravingValue: {type: DataTypes.STRING},
  piReservedRemarks: {type: DataTypes.STRING},
  piReservedByBoMemberId: {type: DataTypes.INTEGER,
    references: {
    model: member,
    key: 'member_id'
  }},
  piReservedTomemberId: {type: DataTypes.STRING,
    references: {
    model: member,
    key: 'member_id'
  }},
  piRemarks: {type: DataTypes.TEXT},
  piValigaraproductId: {type: DataTypes.STRING},
  piValigaraGemid: {type: DataTypes.STRING},
  piShippingdays: {type: DataTypes.INTEGER},
  piTotalViews: {type: DataTypes.INTEGER},
  piDatePublishing: {type: DataTypes.DATE},
  piDateRenewed: {type: DataTypes.DATE},
  piDateMemo: {type: DataTypes.DATE},
  piDateReserved: {type: DataTypes.DATE},
  piDateReserved: {type: DataTypes.DATE},
  piDateReservedFrom: {type: DataTypes.DATE},
  piDateSold: {type: DataTypes.DATE},
  piDateAdded: {type: DataTypes.DATE},
  piLastUpdate: {type: DataTypes.TIME},
  
},{
  underscored: true,
  createdAt: false,
  updatedAt: false
});

member.hasMany(productInfo, {foreignKey: 'piSoldToMemberId'});
productInfo.belongsTo(member, {foreignKey: 'piSoldToMemberId'}, {as: 'piSoldToMemberId'});
productInfo.belongsTo(member, {foreignKey: 'piReservedByBoMemberId'}, {as: 'piReservedByBoMemberId'});
productInfo.belongsTo(member, {foreignKey: 'piReservedTomemberId'}, {as: 'piReservedTomemberId'});


module.exports = {productInfo};