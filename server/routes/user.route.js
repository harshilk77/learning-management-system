import express from 'express';
import { getUserProfile, login, logout, register, updateProfile} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAutenticated.js';

const router = express.Router();

// GET endpoint for listing all users
router.route('/register').post(register)
router.route("/login").post(login)
router.route("/logout").get( logout)
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/profile/update").put(isAuthenticated, updateProfile);


export default router;