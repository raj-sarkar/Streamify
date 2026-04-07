import Express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";
import { createSectionController } from "../controllers/section.controller.js";

const router = Express.Router();

router.post("/", protectRoute, allowRoles("instructor"), createSectionController);

export default router;
