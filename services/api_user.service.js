// In src/services/api_user.js

const crypto = require("crypto");
const { apiUser } = require("../models/api_user.model");

class APIUser {
   static async createNewApiUser(req, res){
   
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512',salt)
                                     .update(req.body.password)
                                     .digest("base64");
    req.body.password = salt + "$" + hash;
    req.body.permissionLevel = 1;
    return apiUser.create(req.body);    
};
   deleteOneApiUser = () => {
  return "Delete an existing api user";
};

};

  
module.exports = APIUser;