

const authService = require("../services/auth.service");

class Auth {
  static async login(req, res) {
    authService.login(req, res).then((tocken) => {
      res.status(200).send({ tocken: tocken });
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };

}

module.exports = Auth;