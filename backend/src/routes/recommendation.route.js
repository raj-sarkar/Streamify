import { getRecommendationController } from "../controllers/recommendation.controller.js";
import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, getRecommendationController);

export default router;
