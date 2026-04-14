import { addToWatchHistoryService, getWatchHistoryService } from "../services/watchHistory.service.js";

export const addToCourseWatchHistoryController = async (req, res) => {
    try{
        const userId = req.user._id;
        const data = req.body;
        const watchHistory = await addToWatchHistoryService(data, userId);
        res.status(201).json(watchHistory);
    } catch (error) {
        res.status(500).json({ message: "Failed to add to watch history", error: error.message });
    }
};

export const getCourseWatchHistoryController = async (req, res) => {
    try{
        const userId = req.user._id;
        const videoId = req.params.videoId;
        const watchHistory = await getWatchHistoryService(videoId, "video", userId);
        if (!watchHistory) {
            return res.status(404).json({ message: "Watch history not found" });
        }

        res.status(200).json(watchHistory);
    } catch (error) {
        res.status(500).json({ message: "Failed to get watch history", error: error.message });
    }
};

export const getMovieWatchHistoryController = async (req, res) => {
    try{
        const userId = req.user._id;
        const videoId = req.params.videoId;
        const watchHistory = await getWatchHistoryService(videoId, "movie", userId);
        if (!watchHistory) {
            return res.status(404).json({ message: "Watch history not found" });
        }

        res.status(200).json(watchHistory);
    } catch (error) {
        res.status(500).json({ message: "Failed to get watch history", error: error.message });
    }
};
