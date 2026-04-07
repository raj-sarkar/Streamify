import { createSectionService } from "../services/section.service.js";

export const createSectionController = async (req, res) => {
    try {
        const newSection = await createSectionService(req.body);
        res.status(201).json(newSection);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
