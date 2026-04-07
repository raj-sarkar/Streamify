import {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    getEnrollment,
    enrollInCourse
} from "../repositories/course.repository.js";
import { getSectionsByCourseId } from "../repositories/section.repository.js";
import { getVideosBySectionId } from "../repositories/video.repository.js";

export const createCourseService = async (courseData, instructorId) => {
    const { title, description, thumbnail, category } = courseData;
    if (!title || !description || !thumbnail || !category) {
        throw new Error("All fields are required");
    }

    const newCourse = await createCourse({ ...courseData, instructorId });
    return newCourse;
};

export const getCoursesService = async () => {
    return await getCourses();
};

export const getCourseByIdService = async (courseId) => {
    if (!courseId) {
        throw new Error("Course ID is required");
    }
    return await getCourseById(courseId);
};

export const updateCourseService = async (courseId, courseData) => {
    if (!courseId) {
        throw new Error("Course ID is required");
    }

    const course = await getCourseById(courseId);
    if (!course) {
        throw new Error("Course not found");
    }

    return await updateCourse(courseId, courseData);
};

export const deleteCourseService = async (courseId) => {
    if (!courseId) {
        throw new Error("Course ID is required");
    }

    const course = await getCourseById(courseId);
    if (!course) {
        throw new Error("Course not found");
    }

    return await deleteCourse(courseId);
};

export const getVideoByCourseIdService = async (userId, courseId) => {
    if (!courseId) {
        throw new Error("Course ID is required");
    }

    const course = await getCourseById(courseId);
    if (!course) {
        throw new Error("Course not found");
    }

    const enrollment = await getEnrollment(userId, courseId);
    if (!enrollment) {
        throw new Error("User is not enrolled in this course");
    }

    const sections = await getSectionsByCourseId(courseId);

    const sectionsWithVideos = await Promise.all(sections.map(async (section) => {
        const videos = await getVideosBySectionId(section._id);
        return {
            ...section.toObject(),
            videos
        };
    }));

    return sectionsWithVideos;
};

export const enrollInCourseService = async (userId, courseId) => {
    if (!userId || !courseId) {
        throw new Error("User ID and Course ID are required");
    }

    const enrollment = await getEnrollment(userId, courseId);
    if (enrollment) {
        throw new Error("User is already enrolled in this course");
    }

    return await enrollInCourse(userId, courseId);
};