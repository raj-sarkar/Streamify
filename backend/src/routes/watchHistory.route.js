import Express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { addToCourseWatchHistoryController, getCourseWatchHistoryController, getMovieWatchHistoryController } from "../controllers/watchHistory.controller.js";

const router = Express.Router();

router.post("/progress", protectRoute, addToCourseWatchHistoryController);
router.get("/course/:videoId", protectRoute, getCourseWatchHistoryController);
router.get("/movie/:videoId", protectRoute, getMovieWatchHistoryController);

export default router;
