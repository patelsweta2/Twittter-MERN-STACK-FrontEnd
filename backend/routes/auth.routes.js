const express = require("express");
const { registerController } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.route("/register").post(registerController);

module.exports = { authRouter };
