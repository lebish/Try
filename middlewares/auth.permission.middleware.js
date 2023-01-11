const minimumPermissionLevelRequired = (requiredPermissionLevel) => {

    return (req, res, next) => {
        let userPermissionLevel = parseInt(req.jwt.permissionLevel);
        let Id = req.jwt.Id;
        if (userPermissionLevel & requiredPermissionLevel) {
            return next();
        } else {
            return res.status(403).send({PermissionError:'you dont have minimum permission level for this action'});
        }
    };
};

const onlySameUserOrAdminCanDoThisAction = () => {
    return (req, res, next) => {
        let userPermissionLevel = parseInt(req.jwt.permissionLevel);
        let Id = req.jwt.Id;
        if (userPermissionLevel & 2147483647 || Id == req.params.Id) {
            return next();
        } else {
            return res.status(403).send({PermissionError:'only same user or admin can do this action'});
        }
    };
};


module.exports = {
    minimumPermissionLevelRequired,
    onlySameUserOrAdminCanDoThisAction
};