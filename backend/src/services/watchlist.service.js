import {
    getWatchlistByUserId,
    addToWatchlist,
    getWatchlistEntry,
    removeFromWatchlist
} from "../repositories/watchlist.repository.js";
import { getMovieById } from "../repositories/movie.repository.js";

export const getWatchlistService = async (userId) => {
    if (!userId) {
        throw new Error("User ID is required");
    }

    return await getWatchlistByUserId(userId);
};

export const addToWatchlistService = async (userId, movieId) => {
    if (!userId || !movieId) {
        throw new Error("User ID and Movie ID are required");
    }

    const movie = await getMovieById(movieId);
    if (!movie) {
        throw new Error("Movie not found");
    }

    const existingEntry = await getWatchlistEntry(userId, movieId);
    if (existingEntry) {
        throw new Error("Movie already in watchlist");
    }

    return await addToWatchlist(userId, movieId);
};

export const removeFromWatchlistService = async (userId, movieId) => {
    if (!userId || !movieId) {
        throw new Error("User ID and Movie ID are required");
    }

    const existingEntry = await getWatchlistEntry(userId, movieId);
    if (!existingEntry) {
        throw new Error("Movie not found in watchlist");
    }

    return await removeFromWatchlist(userId, movieId);
};
