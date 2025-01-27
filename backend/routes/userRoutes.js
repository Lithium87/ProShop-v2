import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUserByID,
} from '../controllers/userController.js';

const router = express.Router ();

router.route ('/').get (getUsers).post (registerUser);
router.post ('/logout', logoutUser);
router.post ('/login', authUser);
router.route ('/profile').get (getUserProfile).put (updateUserProfile);
router
  .route ('/:id')
  .get (getUserByID)
  .put (updateUserByID)
  .delete (deleteUser);

export default router;
