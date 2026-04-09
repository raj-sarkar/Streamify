import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateUserController, getUserWatchHistoryController } from "../controllers/user.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.put("/profile", protectRoute, upload.single("profilePicture"), updateUserController);
router.get("/watch-history", protectRoute, getUserWatchHistoryController);

export default router;
