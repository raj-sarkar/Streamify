import {
    createMovieService,
    getAllMoviesService,
    getMovieByIdService,
    searchMoviesService,
    trendingMoviesService,
    deleteMovieService,
    updateMovieService
} from "../services/movie.service.js";

export const createMovieController = async (req, res) => {
    try {
        const thumbnail = req.files.thumbnail?.[0];
        const movie = req.files.movie?.[0];
        const newMovie = await createMovieService({ ...req.body, thumbnail, movie }, req.user);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getMovieByIdController = async (req, res) => {
    try {
        const movie = await getMovieByIdService(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllMoviesController = async (req, res) => {
    try {
        const movies = await getAllMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMovieController = async (req, res) => {
    try {
        await deleteMovieService(req.params.id);
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateMovieController = async (req, res) => {
    try {
        const updatedMovie = await updateMovieService(req.params.id, req.body);
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const searchMoviesController = async (req, res) => {
    try {
        const movies = await searchMoviesService(req.query.q);
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const trendingMoviesController = async (req, res) => {
    try {
        const movies = await trendingMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
