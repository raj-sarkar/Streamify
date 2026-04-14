import { getWatchHistoryByUserId } from "../repositories/watchHistory.repository.js";
import { similarMovies, topRatedMovies, weeklyTrendingMovies } from "../repositories/movie.repository.js";

export const getRecommendationsService = async (userId) => {
    const history = await getWatchHistoryByUserId(userId);
    const movieHistory = history.movies || [];

    const genres = movieHistory.map((h) => h.videoId?.genre).filter(Boolean);

    const genreMovies = await similarMovies(genres);

    const trending = await weeklyTrendingMovies();

    const topRated = await topRatedMovies();

    const all = [...genreMovies, ...trending, ...topRated];

    const unique = Array.from(
        new Map(all.map((m) => [m._id.toString(), m])).values()
    );

    return unique.slice(0, 10);
};
