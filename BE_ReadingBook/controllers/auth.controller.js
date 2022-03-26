const { generateToken } = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const { token } = require('morgan');
const User = require('../models/user.model');
require('dotenv').config();

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
async function registerUser(req, res, next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const { fullName, email, password } = req.body
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(400).json({ message: 'Email already exists' });
    }
    const user = await User.create({
      email,
      fullName,
      password: bcrypt.hashSync(password, salt),
    });
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser
}
