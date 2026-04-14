import { createWatchHistory, getWatchHistoryByVideoIdAndUserId } from "../repositories/watchHistory.repository.js";
import { getVideoById } from "../repositories/video.repository.js";
import { getSectionById } from "../repositories/section.repository.js";
import { getCourseById, getEnrollment } from "../repositories/course.repository.js";
import { getMovieById } from "../repositories/movie.repository.js";

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

    if(data.type === "video") {
        const video = await getVideoById(data.videoId);
        if(!video) {
            throw new Error("Video not found");
        }
    }
    
    if(data.type === "movie") {
        const movie = await getMovieById(data.videoId);
        if(!movie) {
            throw new Error("Movie not found");
        }
    }

    return await createWatchHistory(data, userId);
};

export const getWatchHistoryService = async (videoId, type, userId) => {
    if(!videoId || !type) {
        throw new Error("videoId and type are required");
    }

    if(!["movie", "video"].includes(type)) {
        throw new Error("Invalid type. Must be 'movie' or 'video'");
    }

    if(type === "video") {
        const video = await getVideoById(videoId);
        if(!video) {
            throw new Error("Video not found");
        }

        const section = await getSectionById(video.sectionId);
        if(!section) {
            throw new Error("Section not found");
        }

        const course = await getCourseById(section.courseId);
        if(!course) {
            throw new Error("Course not found");
        }

        const enrollment = await getEnrollment(userId, course._id);
        if(!enrollment) {
            throw new Error("User is not enrolled in the course");
        }
    }
    return await getWatchHistoryByVideoIdAndUserId(videoId, type, userId);
};
