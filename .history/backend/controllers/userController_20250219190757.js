import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler (async (req, res) => {
  const {email, password} = req.body;

  const user = await User.findOne ({email});

  if (user) {
    res.json ({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status (401);
    throw new Error ('Invalid email or password');
  }
  res.send ('Auth user');
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler (async (req, res) => {
  res.send ('Register user');
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler (async (req, res) => {
  res.send ('Logout user');
});

// @desc Get user's profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler (async (req, res) => {
  res.send ('Get user profile');
});

// @desc Update user's profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler (async (req, res) => {
  res.send ('Update user profile');
});

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler (async (req, res) => {
  res.send ('Get all users');
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler (async (req, res) => {
  res.send ('Delete user');
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
const getUserByID = asyncHandler (async (req, res) => {
  res.send ('Get user by ID');
});

// @desc Update user by ID
// @route PUT /api/users/:id
// @access Private/Admin
const updateUserByID = asyncHandler (async (req, res) => {
  res.send ('Update user by ID');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUserByID,
};
