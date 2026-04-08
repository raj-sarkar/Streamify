import { createWatchHistory, getWatchHistoryByVideoIdAndUserId } from "../repositories/watchHistory.repository.js";

export const addToWatchHistoryService = async (data, userId) => {

    if(!data.videoId || !data.timestamp) {
        throw new Error("videoId and timestamp are required");
    }

    if(typeof data.timestamp !== "number" || data.timestamp < 0) {
        throw new Error("timestamp must be a non-negative number");
    }
    
    return await createWatchHistory(data, userId);
};

export const getWatchHistoryService = async (videoId, userId) => {
    return await getWatchHistoryByVideoIdAndUserId(videoId, userId);
};
