import express from "express";
const router = express.Router();

import  Register from "../controllers/SignUp.js";
import {login,logoutUser,refreshAccessToken} from "../controllers/LogIn.js";
import {
    verifyAccessToken,
    verifyRefreshToken,
    verifyResetToken,
  } from "../utils/jwt.js";
import { getAllMentors } from "../controllers/getAllMentors.js";
import { ProfileData } from "../controllers/ProfileData.js";

router.post("/signIn", Register);
router.post("/logIn",login);
router.post("/refresh-token", refreshAccessToken);
router.get("/logout", logoutUser);
router.post("/getAllMentors",getAllMentors);
router.post("/getProfileData", ProfileData);









//verify routes
router.post("/verify-access-token", (req, res) => {
    const { token } = req.body;
    try {
      const payload = verifyAccessToken(token);
      res.status(200).json({ valid: true, payload });
    } catch (error) {
      res.status(401).json({
        valid: false,
        message: "Invalid access token",
        error: error.message,
      });
    }
  });
  
  // Route to verify refresh token
  router.post("/verify-refresh-token", (req, res) => {
    const { token } = req.body;
    try {
      const payload = verifyRefreshToken(token);
      res.status(200).json({ valid: true, payload });
    } catch (error) {
      res.status(401).json({
        valid: false,
        message: "Invalid refresh token",
        error: error.message,
      });
    }
  });
  
  // Route to verify reset token
  router.post("/verify-reset-token", (req, res) => {
    const { token } = req.body;
    try {
      const payload = verifyResetToken(token);
      res.status(200).json({ valid: true, payload });
    } catch (error) {
      res.status(401).json({
        valid: false,
        message: "Invalid reset token",
        error: error.message,
      });
    }
  });

export default router;