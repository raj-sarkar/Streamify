import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";
import { createVideoController } from "../controllers/video.controller.js";

const router = express.Router();

router.post("/", protectRoute, allowRoles("instructor"), createVideoController);

export default router;
