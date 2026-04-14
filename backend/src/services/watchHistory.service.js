import { createWatchHistory, getWatchHistoryByVideoIdAndUserId } from "../repositories/watchHistory.repository.js";

export const addToWatchHistoryService = async (data, userId) => {

    if(!data.videoId || !data.timestamp || !data.type ) {
        throw new Error("videoId, timestamp, and type are required");
    }

    if(typeof data.timestamp !== "number" || data.timestamp < 0) {
        throw new Error("timestamp must be a non-negative number");
    }

    if(!["movie", "video"].includes(data.type)) {
        throw new Error("Invalid type. Must be 'movie' or 'video'");
    }

    return await createWatchHistory(data, userId);
};

export const getWatchHistoryService = async (videoId, type, userId) => {
    return await getWatchHistoryByVideoIdAndUserId(videoId, type, userId);
};
