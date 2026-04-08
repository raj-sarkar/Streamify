import { createVideo, getVideoBySectionIdAndTitle } from "../repositories/video.repository.js";
import { saveVideo } from "./storage.service.js";
import { getVideoDuration } from "../utils/getVideoDuration.js";
import { convertToHLS } from "./hls.service.js";

export const createVideoService = async (file, videoData) => {
    const { title, sectionId } = videoData;
    if (!title || !sectionId) {
        throw new Error("Title and section ID are required");
    }

    const existingVideo = await getVideoBySectionIdAndTitle(sectionId, title);
    if (existingVideo) {
        throw new Error("A video with the same title already exists in this section");
    }

    const newVideo = await createVideo(videoData);
    const filepath = await saveVideo(file, newVideo._id.toString());

    newVideo.videoUrl = filepath;
    newVideo.duration = await getVideoDuration(filepath);
    newVideo.hlsUrl = await convertToHLS(filepath, newVideo._id.toString());

    await newVideo.save();

    return newVideo;
};
