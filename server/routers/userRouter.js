import { Router } from 'express';
import { addLikedMovie, changePassword, deleteAllLike, deleteUser, getLikedMovie, getUsers, loginUser, register, userDelete, userUpdate } from '../controllers/userController.js';
import asyncHandler from '../middleware/asyncHandler.js';
import { isAdmin, isLoggedIn } from '../middleware/auth.js';

const router = Router();


// *************PUBLIC ROUTES****************
router.post('/register', asyncHandler(register));
router.post('/login', asyncHandler(loginUser));

// *************PRIVATE ROUTES****************
router.put('/', isLoggedIn, asyncHandler(userUpdate));
router.delete('/', isLoggedIn, asyncHandler(deleteUser));
router.post('/password', isLoggedIn, asyncHandler(changePassword));
router.get('/favorites', isLoggedIn, asyncHandler(getLikedMovie));
router.post('/favorites', isLoggedIn, asyncHandler(addLikedMovie));
router.delete('/favorites', isLoggedIn, asyncHandler(deleteAllLike));


// ****************ADMIN ROUTES****************
router.get('/', isLoggedIn, isAdmin, getUsers);
router.delete('/:id', isLoggedIn, isAdmin, deleteAllLike);


export default router;