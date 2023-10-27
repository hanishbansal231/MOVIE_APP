import { movies } from '../Data/movie.js';
import { Movie } from '../models/movieModel.js';
import AppError from '../utils/errorUtils.js';



const importMovie = async (req, res, next) => {
    try {
        await Movie.deleteMany({});
        const movie = await Movie.insertMany(movies);

        return res.status(200).json({
            success: true,
            message: "All Movies Inserterd...",
            movie
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const getMovies = async (req, res, next) => {
    try {
        const { category, time, languages, imdbRating, year, search } = req.query;

        let query = {
            ...(category && { category }),
            ...(time && { time }),
            ...(languages && { languages }),
            ...(imdbRating && { imdbRating }),
            ...(year && { year }),
            ...(search && { title: { $regex: search, $options: 'i' } }),
        }

        console.log(query);

        const page = Number(req.query.pageNumber) || 1;
        const limit = 4;
        const skip = (page - 1) * limit

        const movies = await Movie.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const count = await Movie.countDocuments(query);

        return res.status(200).json({
            success: true,
            message: 'Filter Movies...',
            movies,
            page,
            pages: Math.ceil(count / limit),
            totalMovies: count,
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const getMovieById = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return next(new AppError('Movie id not found...', 403));
        }

        const movie = await Movie.findById(id);

        if (!movie) {
            return next(new AppError('Movie Not Found...', 402));
        }

        return res.status(200).json({
            success: true,
            message: 'Movie Find...',
            movie
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const getTopRatedMovie = async (req, res, next) => {
    try {
        const movies = await Movie.find({}).sort({ imdbRating: -1 }).limit(10);

        if (!movies) {
            return next(new AppError('Top Rated Movie Not Found...', 404));
        }

        return res.status(200).json({
            success: true,
            message: 'Top Rated...',
            movies
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const getRandomMovies = async (req, res, next) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 8 } }]);

        if (!movies) {
            return next(new AppError('Movies not found...', 403));
        }

        return res.status(200).json({
            success: true,
            message: 'Random movies found...',
            movies
        });

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const createMovieReview = async (req, res, next) => {
    try {
        const { rating, comment } = req.body;
        const { id } = req.params;

        if (!id) {
            return next(new AppError('Movie id not found...', 403));
        }
        const movie = await Movie.find(id);

        if (!movie) {
            return next(new AppError('Movie not found...', 403));
        }

        const alreadyReview = movie.reviews.find((r) => r.userId.toString() === req.user.id.toString());

        if (alreadyReview) {
            return next(new AppError('You already reviewed this movie', 400));
        }

        const review = {
            userName: req.user.name,
            userId: req.user.id,
            userImage: req.user.image,
            rating: Number(rating),
            comment,
        }

        movie.reviews.push(review);
        movie.numReviews = movie.reviews.length;
        movie.imdbRating = movie.review.reduce((acc,item) => item.rating + acc,0) / movie.reviews.length;

        await movie.save();

        return res.status(200).json({
            success: true,
            message:'Successfully Review...',
            movie
        });
        

    } catch (e) {
        return next(new AppError(e.message, 500));
    }
}

const updateMovie = async (req,res,next) =>{
    try{

        const {id} = req.params;

        const updateMovie = await Movie.findByIdAndUpdate(id,{
            $set: req.body,
        },{new: true});

        if(!updateMovie){
            return next(new AppError('Update movie Error...',403));
        }

        return res.status(200).json({
            success: true,
            message: 'Updated Successfully...',
            updateMovie
        });

    }catch(e){
        return next(new AppError(e.message, 500));
    }
}

const deleteMovie = async (req,res,next) => {
    try{
        const {id} = req.params;

        await Movie.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message:'Deleted Successfully...',
        });

    }catch(e){
        return next(new AppError(e.message, 500));
    }
}

const deleteAllMovie = async (req,res,next) => {
    try{
        await Movie.deleteMany({});

        return res.status(200).json({
            success:true,
            message:'Delted All Movies...',
        });

    }catch(e){
        return next(new AppError(e.message, 500));
    }
}

export {
    importMovie,
    getMovies,
    getMovieById,
    getTopRatedMovie,
    getRandomMovies,
    createMovieReview,
    updateMovie,
    deleteMovie,
    deleteAllMovie
}