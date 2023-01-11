
const memberService = require("../services/member.service");

class Member {


  // const getOneMember = (req, res) => {
  //   const member = memberService.getOneMember();

  // };


  static async getAllMembers(req, res){
    memberService.getAllMembers(req).then((allMembers) => {
      res.status(200).send({ allMembers: allMembers })
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };


  // const createNewMember = (req, res) => {
  //   const createdMember = memberService.createNewMember();

  // };

  // const updateOneMember = (req, res) => {
  //   const updatedMember = memberService.updateOneMember();

  // };

  // const deleteOneMember = (req, res) => {
  //   memberService.deleteOneMember();

  // };
}

module.exports = Member;