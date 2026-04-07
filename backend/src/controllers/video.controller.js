import { createVideoService } from "../services/video.service.js";

export const createVideoController = async (req, res) => {
    try {
        const newVideo = await createVideoService(req.body);
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
