const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require('dotenv').config()

class Auth { 

  static async login(req, res, next) {   
    
     
      let refreshId = req.body.Id + process.env.JWT_SECRET;
      let salt = crypto.randomBytes(16).toString('base64');
      let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
      
      req.body.refreshKey = salt;
      let token = jwt.sign(req.body, process.env.JWT_SECRET);
      let b = Buffer.from(hash);
      let refreshToken = b.toString('base64');
      return { accessToken: token, refreshToken: refreshToken };
    };
 

}

module.exports = Auth;