import Section from "../models/section.model.js";

export const createSection = async (sectionData) => {
    return await Section.create(sectionData);
};

export const getSectionsByCourseId = async (courseId) => {
    return await Section.find({ courseId });
};

export const getSectionByCourseIdAndTitle = async (courseId, title) => {
    return await Section.findOne({ courseId, title });
};
