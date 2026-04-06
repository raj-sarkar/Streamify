import { createReviewService, getReviewsByMovieIdService } from '../services/review.service.js';

export const createReviewController = async (req, res) => {
    try {
        const {movieId} = req.params;
        if (!movieId) {
            return res.status(400).json({ message: "Movie ID is required" });
        }
        
        const newReview = await createReviewService({ ...req.body, movieId }, req.user);
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getReviewsByMovieIdController = async (req, res) => {
    try {
        const { movieId } = req.params;
        if (!movieId) {
            return res.status(400).json({ message: "Movie ID is required" });
        }
        
        const reviews = await getReviewsByMovieIdService(movieId);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
