import { createReview, getReviewsByMovieId, getReviewByuserIdAndMovieId, getAverageRatingByMovieId } from '../repositories/review.repository.js';
import { getMovieById, updateMovieRating } from '../repositories/movie.repository.js';

export const createReviewService = async (reviewData, user) => {
    const { movieId, rating, comment } = reviewData;
    if (!movieId || !rating || !comment) {
        throw new Error("Movie ID, rating, and comment are required");
    }

    const movie = await getMovieById(movieId);
    if (!movie) {
        throw new Error("Movie not found");
    }

    const existingReview = await getReviewByuserIdAndMovieId(user._id, movieId);
    if (existingReview) {
        throw new Error("User has already reviewed this movie");
    }

    const newReview = await createReview({
        ...reviewData,
        userId: user._id
    });

    const avgRating = await getAverageRatingByMovieId(movieId);
    await updateMovieRating(movieId, avgRating);

    return newReview;
};

export const getReviewsByMovieIdService = async (movieId) => {
    if (!movieId) {
        throw new Error("Movie ID is required");
    }
    
    const movie = await getMovieById(movieId);
    if (!movie) {
        throw new Error("Movie not found");
    }
    return await getReviewsByMovieId(movieId);
};
