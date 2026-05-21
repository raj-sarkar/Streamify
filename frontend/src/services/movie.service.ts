import { api } from '@api';
import type { Movie } from 'models';

export const movieApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTrendingMovies: builder.query<Movie[], void>({
            query: () => ({
                url: '/movies/trending',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetTrendingMoviesQuery } = movieApi;
