import { Router } from 'express'
import { createMovieReview, deleteMovie, getMovieById, getMovies, getRandomMovies, getTopRatedMovie, importMovie, updateMovie } from '../controllers/movieController.js';
import { isAdmin, isLoggedIn } from '../middleware/auth.js';

const router = Router();


router.post('/import', importMovie);
router.get('/', getMovies);
router.get('/:id', getMovieById);
router.get('/rated/top', getTopRatedMovie);
router.get('/random/all', getRandomMovies);

router.post('/:id/reviews', createMovieReview);

router.put('/:id', isLoggedIn, isAdmin, updateMovie);
router.delete('/:id', isLoggedIn, isAdmin, deleteMovie);
router.delete('/', isLoggedIn, isAdmin, deleteMovie);


export default router