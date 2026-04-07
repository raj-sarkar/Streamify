import {
    createCourseService,
    getCoursesService,
    getCourseByIdService,
    updateCourseService,
    deleteCourseService,
    getVideoByCourseIdService,
    enrollInCourseService
} from "../services/course.service.js";

export const createCourseController = async (req, res) => {
    try {
        const courseData = req.body;
        const newCourse = await createCourseService(courseData, req.user._id);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCoursesController = async (req, res) => {
    try {
        const courses = await getCoursesService();
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCourseByIdController = async (req, res) => {
    try {
        const course = await getCourseByIdService(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateCourseController = async (req, res) => {
    try {
        const course = await updateCourseService(req.params.id, req.body);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCourseController = async (req, res) => {
    try {
        const course = await deleteCourseService(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getVideoByCourseIdController = async (req, res) => {
    try {
        const sectionsWithVideos = await getVideoByCourseIdService(req.user._id, req.params.id);
        res.status(200).json(sectionsWithVideos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const enrollInCourseController = async (req, res) => {
    try {
        const enrollment = await enrollInCourseService(req.user._id, req.params.id);
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
