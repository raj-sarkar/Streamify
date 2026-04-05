import Movie from "../models/movie.model.js";

export const createMovie = async (movieData) => {
    return await Movie.create(movieData);
};

export const getMovieById = async (id) => {
    return await Movie.findOne({ _id: id });
};

export const getAllMovies = async () => {
    return await Movie.find();
};

export const updateMovie = async (id, updateData) => {
    return await Movie.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteMovie = async (id) => {
    return await Movie.findByIdAndDelete(id);
};

export const searchMovies = async (query) => {
    return await Movie.find({ title: { $regex: query, $options: "i" } });
};

export const trendingMovies = async () => {
    return await Movie.find().sort({ views: -1 }).limit(10);
};
