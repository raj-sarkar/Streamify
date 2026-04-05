import Watchlist from "../models/watchlist.model.js";

export const getWatchlistByUserId = async (userId) => {
    return await Watchlist.find({ userId }).populate("movieId");
};

export const getWatchlistEntry = async (userId, movieId) => {
    return await Watchlist.findOne({ userId, movieId });
};

export const removeFromWatchlist = async (userId, movieId) => {
    return await Watchlist.findOneAndDelete({ userId, movieId });
};

export const addToWatchlist = async (userId, movieId) => {
    const newEntry = new Watchlist({ userId, movieId });

    return await newEntry.save();
};
