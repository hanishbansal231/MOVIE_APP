import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userImage: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String
        }
    },
    rating: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, { timestamps: true });

const movieSchema = new Schema({
    languages: [String],
    year: {
        low: Number,
        high: Number
    },
    imdbId: String,
    runtime: {
        low: Number,
        high: Number
    },
    imdbRating: Number,
    movieId: String,
    countries: [String],
    imdbVotes: {
        low: Number,
        high: Number
    },
    title: String,
    url: String,
    revenue: {
        low: Number,
        high: Number
    },
    tmdbId: String,
    plot: String,
    poster: String,
    released: Date,
    budget: {
        low: Number,
        high: Number
    },
    id: String,
    poster_image: String,
    tagline: String,
    duration: Number,
    reviews: [reviewSchema],
    numReviews:Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });


const Review = model('Review', reviewSchema);
const Movie = model('Movie', movieSchema);

export {
    Review,
    Movie,
}