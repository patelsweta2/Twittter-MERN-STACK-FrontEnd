const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.route("/register").post(registerController);
authRouter.route("/login").post(loginController);

module.exports = { authRouter };
