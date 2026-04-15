import Course from '../models/course.model.js';
import Enroll from '../models/enroll.model.js';

export const createCourse = async (courseData) => {
    return await Course.create(courseData);
};

export const getCourses = async () => {
    return await Course.find();
};

export const getCourseById = async (courseId) => {
    return await Course.findById(courseId);
};

export const countCourses = async () => {
    return await Course.countDocuments();
};

export const updateCourse = async (courseId, courseData) => {
    return await Course.findByIdAndUpdate(courseId, courseData, { returnDocument: "after" });
};

export const deleteCourse = async (courseId) => {
    return await Course.findByIdAndDelete(courseId);
};

export const getEnrollment = async (userId, courseId) => {
    return await Enroll.findOne({ userId, courseId });
};

export const enrollInCourse = async (userId, courseId) => {

    const enrollment = await Enroll.create({ userId, courseId });
    
    return enrollment;
};