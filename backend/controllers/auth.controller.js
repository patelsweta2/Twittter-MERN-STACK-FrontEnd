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
  if (userExist) {
    res.status(400);
    throw new Error("Username already exist. Try another");
  }
});

module.exports = {
  registerController,
};
