import express from 'express';
import {signin, signup}  from '../controllers/auth.js';

const router = express.Router();

//Create a new user
router.post("/signup", signup );

//Sign in a user
router.post("/signin",signin);

// //Google Auth
// router.post("/google");

export default router;