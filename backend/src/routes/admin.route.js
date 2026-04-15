import express from 'express';
import {
    approveInstructorRequestController,
    deleteUserController,
    getAllInstructorsController,
    getAllUsersController,
    getAnalyticsController
} from '../controllers/admin.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { allowRoles } from '../middleware/role.middleware.js';

const router = express.Router();

router.get('/users', protectRoute, allowRoles('admin'), getAllUsersController);
router.get('/instructors', protectRoute, allowRoles('admin'), getAllInstructorsController);
router.put('/approve-instructor', protectRoute, allowRoles('admin'), approveInstructorRequestController);
router.delete('/user/:id', protectRoute, allowRoles('admin'), deleteUserController);
router.get('/analytics', protectRoute, allowRoles('admin'), getAnalyticsController);

export default router;
