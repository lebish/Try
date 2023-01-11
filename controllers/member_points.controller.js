

class MemberPoints {


  MemberPointsService = require("../services/member_points.service");

 static async getAllMemberPoints(req, res){
    MemberPointsService.getAllMemberPoints().then((allMemberPoints) => {
      res.status(200).send({ allMemberPoints: allMemberPoints });
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };

  static async getMemberPointsOfMember(req, res){
    MemberPointsService.getMemberPointsOfMember(req).then((memberPointsOfMember) => {
      res.status(200).send({ memberPointsOfMember: memberPointsOfMember });
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };

  static async getBlanceMemberPointsOfMember(req, res){
    MemberPointsService.getBlanceMemberPointsOfMember(req.params.mpMemberId).then((blanceMemberPointsOfMember) => {
      res.status(200).send({ blanceMemberPointsOfMember: blanceMemberPointsOfMember });
    })
      .catch((error) => {
        res.status(400).send(error);
      });
  };

  // const getOneMemberPoints = (req, res) => {
  //   const oneMemberPoints = MemberPointsService.getOneMemberPoints(req); 
  //   res.status(200).send({ oneMemberPoints: oneMemberPoints });  
  // };


  // const createNewMemberPoints = (req, res) => {
  //   const createdMemberPoints = MemberPointsService.createNewMemberPoints();
  //   res.status(200).send({ createdMemberPoints: createdMemberPoints });

  // };

  // const updateOneMemberPoints = (req, res) => {
  //   const memberPoints = MemberPointsService.updateOneMemberPoints(req.params.mpId);
  //   res.status(200).send({ memberPoints: memberPoints });

  // };

  // const deleteOneMemberPoints = (req, res) => {
  //   MemberPointsService.deleteOneMemberPoints(req.params.mpId);
  //   res.status(200);

  // };

}

module.exports = MemberPoints;
