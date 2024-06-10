const constants = require("../../constants.js");
const User = require("../models/users.models.js");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const registerController = asyncHandler(async (req, res) => {
  const { email, userName, fullName, password } = req.body;

  if (!email || !userName || !fullName || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const userExist = await User.findByCredentials(userName, email);

  if (!userExist) {
    const user = new User({
      userName,
      fullName,
      email,
      password,
    });
    const newUser = await user.save();
    return res.status(201).json({ success: true });
  }
  const userNameEmailExist =
    userExist.userName === userName && userExist.email === email;
  const userNameExist = userExist.userName === userName;
  const emailExist = userExist.email === email;

  if (userNameEmailExist) {
    res.status(400);
    throw new Error("User with same email and userName already exists.");
  }
  if (emailExist) {
    res.status(400);
    throw new Error("Email already exist. Try another");
  }
  if (userNameExist) {
    res.status(400);
    throw new Error("Username already exist. Try another");
  }
});

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new error("All fields are required");
  }
  const userExist = await User.findByUserName(userName);
  if (!userExist) {
    res.status(401);
    throw new Error("Provided username does not exist");
  }
  const verifyPassword = await userExist.verifyPassword(password);
  console.log(verifyPassword);
  if (!verifyPassword) {
    res.status(401);
    throw new Error("You have entered incorrect password");
  }
  const accessToken = await userExist.generateAccessToken();
  const refreshToken = await userExist.generateRefreshToken();
  res.cookie(constants.COOKIE_NAME, refreshToken, {
    httpOnly: constants.NODE_ENV === "development",
    secure: true,
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: "none",
  });
  res.status(200).json({
    success: true,
    userExist,
    accessToken,
    userId: userExist._id,
  });
});
const refreshAccessTokenController = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies[constants.COOKIE_NAME];
  if (!refreshToken) {
    return res.status(403).json({ message: "Unauthorized" });
  }
});

module.exports = {
  registerController,
  loginController,
};
