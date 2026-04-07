import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { allowRoles } from '../middleware/role.middleware.js';
import {
    createCourseController,
    getCoursesController,
    getCourseByIdController,
    updateCourseController,
    deleteCourseController,
    getVideoByCourseIdController,
    enrollInCourseController
} from '../controllers/course.controller.js';

const router = express.Router();

router.post('/', protectRoute, allowRoles('instructor'), createCourseController);
router.get('/', protectRoute, getCoursesController);
router.get('/:id', protectRoute, getCourseByIdController);
router.put('/:id', protectRoute, allowRoles('instructor'), updateCourseController);
router.delete('/:id', protectRoute, allowRoles('instructor'), deleteCourseController);
router.get('/:id/videos', protectRoute, getVideoByCourseIdController);
router.post('/:id/enroll', protectRoute,allowRoles('user'), enrollInCourseController);

export default router;
