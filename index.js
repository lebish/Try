
const express = require("express");
bodyParser = require('body-parser');

const memberRouter = require("./routers/member.router");
const memberPointsRouter = require("./routers/member_points.router");
const apiUserRouter = require("./routers/api_user.router");
const authRouter = require("./routers/auth.router");
const orderRouter = require("./routers/order.router");

const app = express();
const PORT = 8080;


app.use(bodyParser.json());
app.use("/api/member", memberRouter);
app.use("/api/member_points", memberPointsRouter);
app.use("/api/api_user", apiUserRouter);
app.use("/api/auth", authRouter);
app.use("/api/order", orderRouter);


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});