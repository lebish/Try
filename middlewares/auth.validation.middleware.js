const jwt = require("jsonwebtoken");
require('dotenv').config()

const validJWTNeeded = (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], process.env.JWT_SECRET);
                return next();
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
}; 

module.exports = {
    validJWTNeeded
};