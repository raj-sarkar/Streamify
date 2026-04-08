import { createWatchHistory, getWatchHistoryByVideoIdAndUserId } from "../repositories/watchHistory.repository.js";

export const addToWatchHistoryController = async (req, res) => {
    try{
        const userId = req.user._id;
        const data = req.body;
        const watchHistory = await createWatchHistory(data, userId);
        res.status(201).json(watchHistory);
    } catch (error) {
        res.status(500).json({ message: "Failed to add to watch history", error: error.message });
    }
};

export const getWatchHistoryController = async (req, res) => {
    try{
        const userId = req.user._id;
        const videoId = req.params.videoId;
        const watchHistory = await getWatchHistoryByVideoIdAndUserId(videoId, userId);
        if (!watchHistory) {
            return res.status(404).json({ message: "Watch history not found" });
        }

        res.status(200).json(watchHistory);
    } catch (error) {
        res.status(500).json({ message: "Failed to get watch history", error: error.message });
    }
};
