import {
    createMovie,
    getAllMovies,
    getMovieById,
    searchMovies,
    trendingMovies,
    deleteMovie,
    updateMovie
} from "../repositories/movie.repository.js";
import { saveVideo, uploadToCloudinary } from "./storage.service.js";
import { getVideoDuration } from "../utils/getVideoDuration.js";
import { convertToHLS } from "./hls.service.js";

export const createMovieService = async (movieData, user) => {
    const { title, description, genre, thumbnail, movie } = movieData;

    if (!title || !description || !genre || !movie) {
        throw new Error("All fields are required");
    }

    if (thumbnail) {
        const thumbnailUrl = await uploadToCloudinary(thumbnail);
        movieData.thumbnail = thumbnailUrl;
    }

    const newMovie = await createMovie({
        ...movieData,
        uploadedBy: user._id
    });

    const filePath = await saveVideo(movie, newMovie._id.toString());
    newMovie.videoUrl = filePath;
    newMovie.duration = await getVideoDuration(filePath);
    newMovie.hlsUrl = await convertToHLS(filePath, newMovie._id.toString());
    
    await newMovie.save();

    return newMovie;
};

export const getMovieByIdService = async (id) => {
    if (!id) {
        throw new Error("Movie ID is required");
    }

    return await getMovieById(id);
};

export const getAllMoviesService = async () => {
    return await getAllMovies();
};

export const deleteMovieService = async (id) => {
    if (!id) {
        throw new Error("Movie ID is required");
    }

    const movie = await getMovieById(id);
    if (!movie) {
        throw new Error("Movie not found");
    }

    return await deleteMovie(id);
};

export const updateMovieService = async (id, updateData) => {
    if (!id) {
        throw new Error("Movie ID is required");
    }

    const movie = await getMovieById(id);
    if (!movie) {
        throw new Error("Movie not found");
    }

    return await updateMovie(id, updateData);
};

export const searchMoviesService = async (query) => {
    if (!query) {
        throw new Error("Search query is required");
    }
    return await searchMovies(query);
};

export const trendingMoviesService = async () => {
    return await trendingMovies();
};
