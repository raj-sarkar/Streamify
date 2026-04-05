import { createMovie, getAllMovies, getMovieById, searchMovies, trendingMovies, deleteMovie, updateMovie } from "../repositories/movie.repository.js";

export const createMovieService = async (movieData,user) => {
    const { title, description, genre, duration, thumbnail, videoUrl } = movieData;

    if (!title || !description || !genre || !duration || !thumbnail || !videoUrl ) {
        throw new Error("All fields are required");
    }

    const newMovie = await createMovie({
        ...movieData,
        uploadedBy: user._id
    });

    return newMovie;
};

export const getMovieByIdService = async (id) => {
    if(!id){
        throw new Error("Movie ID is required");
    }
    
    return await getMovieById(id);
};

export const getAllMoviesService = async () => {
    return await getAllMovies();
};

export const deleteMovieService = async (id) => {
    if(!id){
        throw new Error("Movie ID is required");
    }

    const movie = await getMovieById(id);
    if(!movie){
        throw new Error("Movie not found");
    }

    return await deleteMovie(id);
};

export const updateMovieService = async (id, updateData) => {
    if(!id){
        throw new Error("Movie ID is required");
    }

    const movie = await getMovieById(id);
    if(!movie){
        throw new Error("Movie not found");
    }
    
    return await updateMovie(id, updateData);
};

export const searchMoviesService = async (query) => {
    if(!query){
        throw new Error("Search query is required");
    }
    return await searchMovies(query);
};

export const trendingMoviesService = async () => {
    return await trendingMovies();
};
