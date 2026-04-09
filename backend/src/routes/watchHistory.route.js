import Express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { addToWatchHistoryController, getWatchHistoryController } from "../controllers/watchHistory.controller.js";

const router = Express.Router();

router.post("/progress", protectRoute, addToWatchHistoryController);
router.get("/course/:videoId", protectRoute, getWatchHistoryController);

export default router;
