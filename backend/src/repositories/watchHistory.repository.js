import WatchHistory from "../models/watchHistory.model.js";

export const createWatchHistory = async (data,userId) => {
    return await WatchHistory.findOneAndUpdate(
        { userId, videoId: data.videoId, type: data.type },
        { timestamp: data.timestamp },
        {
            returnDocument: "after",
            upsert: true
        }
    );
};

export const getWatchHistoryByVideoIdAndUserId = async (videoId, type, userId) => {
    return await WatchHistory.findOne({ videoId, type, userId });
};

export const getWatchHistoryByUserId = async (userId) => {
    const movies = await WatchHistory.find({ userId, type: "movie" }).populate("videoId");
    const videos = await WatchHistory.find({ userId, type: "video" }).populate("videoId");
    return { movies, videos };
};
