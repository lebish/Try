

const apiUserService = require("../services/api_user.service");

class APIUser {
  static async createNewApiUser(req, res) {
    apiUserService.createNewApiUser(req, res).then((createdNewApiUser) => {
      res.status(200).send({ createdNewApiUser: createdNewApiUser });
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };

  static async deleteOneApiUser(req, res) {
    apiUserService.deleteOneApiUser().then(() => {
      res.status(200)
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };

}

module.exports = APIUser;