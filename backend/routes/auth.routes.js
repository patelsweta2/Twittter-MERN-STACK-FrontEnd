const express = require("express");
const {
  registerController,
  loginController,
  refreshAccessTokenController,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.route("/register").post(registerController);
authRouter.route("/login").post(loginController);
authRouter.route("/refresh").get(refreshAccessTokenController);

module.exports = { authRouter };
