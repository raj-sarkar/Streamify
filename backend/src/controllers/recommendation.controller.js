import { getRecommendationsService } from '../services/recommendation.service.js';

export const getRecommendationController = async (req, res) => {
    try {
        const userId = req.user._id;
        const recommendations = await getRecommendationsService(userId);
        res.json(recommendations);
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        res.status(500).json({ message: "Failed to fetch recommendations" });
    }
};
