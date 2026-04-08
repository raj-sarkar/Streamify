import WatchHistory from "../models/watchHistory.model.js";

export const createWatchHistory = async (data,userId) => {
    return await WatchHistory.findOneAndUpdate(
        { userId, videoId: data.videoId },
        { timestamp: data.timestamp },
        {
            new: true,
            upsert: true
        }
    );
};

export const getWatchHistoryByVideoIdAndUserId = async (videoId, userId) => {
    return await WatchHistory.findOne({ videoId, userId });
};
