import express from 'express';
import { register, login, logout, current } from '../controllers/auth.controller.js';
import {protectRoute} from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

router.post('/register', upload.single('profilePicture'), register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/current',protectRoute, current);

export default router;
