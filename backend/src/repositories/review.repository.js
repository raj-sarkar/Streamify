import mongoose from 'mongoose';
import Review from '../models/review.model.js';

export const createReview = async (reviewData) => {
    return await Review.create(reviewData);
};

export const getReviewsByMovieId = async (movieId) => {
    return await Review.find({ movieId }).populate('userId');
};

export const getReviewByuserIdAndMovieId = async (userId, movieId) => {
    return await Review.findOne({ userId, movieId });
};

export const getAverageRatingByMovieId = async (movieId) => {
    const result = await Review.aggregate([
        { $match: { movieId: new mongoose.Types.ObjectId(movieId) } },
        { $group: { _id: "$movieId", averageRating: { $avg: "$rating" } } }
    ]);
    return result[0]?.averageRating || 0;
};
