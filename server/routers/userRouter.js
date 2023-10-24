import { Router } from 'express';
import { loginUser, register, userUpdate } from '../controllers/userController.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { isLoggedIn } from '../middleware/auth.js';

const router = Router();

router.post('/', asyncHandler(register));
router.post('/', asyncHandler(loginUser));
router.post('/', isLoggedIn, asyncHandler(userUpdate));


export default router;