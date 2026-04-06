import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { createReviewController, getReviewsByMovieIdController } from '../controllers/review.controller.js';

const router = express.Router();

router.post("/:movieId", protectRoute, createReviewController);
router.get("/:movieId", protectRoute, getReviewsByMovieIdController);

export default router;
