const crypto = require("crypto");
const { apiUser } = require("../models/api_user.model");

const hasAuthValidFields =(req, res, next) => {
  return next();
 };
 
const isPasswordAndApiUserMatch = (req, res, next) => {
  apiUser.findOne({ where: { email: req.body.email } },{ raw: true, nest: true })
  .then((apiUser)=>{
    if(!apiUser){
      res.status(404).send({errors: 'Invalid email or password'});
    }else{
      let passwordFields = apiUser.password.split('$');
      let salt = passwordFields[0];
    
      let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
      if (hash === passwordFields[1]) {
          req.body = {
          id: apiUser.id,
          email: apiUser.email,
          permissionLevel: apiUser.permissionLevel,
          name: apiUser.firstName + ' ' + apiUser.lastName,
        };
        return next();
      } else {
        return res.status(400).send({errors: 'Invalid email or password'});
      }
    }
  });
};

module.exports = {
  hasAuthValidFields,
  isPasswordAndApiUserMatch
 };