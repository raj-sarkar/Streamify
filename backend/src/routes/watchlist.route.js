import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { addToWatchlistController, getWatchlistController, removeFromWatchlistController } from '../controllers/watchlist.controller.js';

const router = express.Router();

router.get("/", protectRoute, getWatchlistController);
router.post("/:movieId", protectRoute, addToWatchlistController);
router.delete("/:movieId", protectRoute, removeFromWatchlistController);

export default router;
