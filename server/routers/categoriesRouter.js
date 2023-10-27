import { Router } from 'express';
import { createCategory, deleteCategory, getCategory, updateCategory } from '../controllers/categoriesController';
import { isAdmin, isLoggedIn } from '../middleware/auth';

const router = Router();


router.get('/', getCategory);


router.post('/', isLoggedIn, isAdmin, createCategory);
router.put('/:id', isLoggedIn, isAdmin, updateCategory);
router.delete('/:id', isLoggedIn, isAdmin, deleteCategory);

export default router;