import express from "express";
import {
    createMovieController,
    getAllMoviesController,
    getMovieByIdController,
    searchMoviesController,
    trendingMoviesController,
    deleteMovieController,
    updateMovieController
} from "../controllers/movie.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/", protectRoute, allowRoles("admin"),upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "movie", maxCount: 1 }
  ]), createMovieController);
router.get("/", protectRoute, getAllMoviesController);
router.get("/search", protectRoute, searchMoviesController);
router.get("/trending", protectRoute, trendingMoviesController);
router.get("/:id", protectRoute, getMovieByIdController);
router.put("/:id", protectRoute, allowRoles("admin"), updateMovieController);
router.delete("/:id", protectRoute, allowRoles("admin"), deleteMovieController);

export default router;
