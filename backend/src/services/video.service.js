import { createVideo } from "../repositories/video.repository.js";

export const createVideoService = async (videoData) => {
    const { title, videoUrl, sectionId, duration } = videoData;
    if (!title || !videoUrl || !sectionId || !duration) {
        throw new Error("All fields are required");
    }

    const newVideo = await createVideo(videoData);

    return newVideo;
};
