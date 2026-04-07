import { createSection, getSectionByCourseIdAndTitle } from "../repositories/section.repository.js";

export const createSectionService = async (sectionData) => {
    const { title, courseId } = sectionData;
    if (!title || !courseId) {
        throw new Error("All fields are required");
    }
    
    const existingSection = await getSectionByCourseIdAndTitle(courseId, title);
    if (existingSection) {
        throw new Error("Section with this title already exists in the course");
    }

    const newSection = await createSection(sectionData);
    return newSection;
};
