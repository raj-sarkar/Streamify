import {
    addToWatchlistService,
    getWatchlistService,
    removeFromWatchlistService
} from '../services/watchlist.service.js';

export const getWatchlistController = async (req, res) => {
    try {
        const watchlist = await getWatchlistService(req.user._id);
        res.status(200).json(watchlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addToWatchlistController = async (req, res) => {
    try {
        const { movieId } = req.params;
        const newEntry = await addToWatchlistService(req.user._id, movieId);
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const removeFromWatchlistController = async (req, res) => {
    try {
        const { movieId } = req.params;
        await removeFromWatchlistService(req.user._id, movieId);
        res.status(200).json({ message: "Movie removed from watchlist" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};