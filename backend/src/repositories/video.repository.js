import Video from "../models/video.model.js";

export const createVideo = async (videoData) => {
    return await Video.create(videoData);
};

export const getVideosBySectionId = async (sectionId) => {
    return await Video.find({ sectionId });
};

export const getVideoBySectionIdAndTitle = async (sectionId, title) => {
    return await Video.findOne({ sectionId, title });
};
