import express from "express";
import { createPaymentOrderController,verifyPaymentController } from "../controllers/payment.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import {allowRoles} from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/create-order", protectRoute, allowRoles("student"), createPaymentOrderController);
router.post("/verify-payment", protectRoute, allowRoles("student"), verifyPaymentController);

export default router;
