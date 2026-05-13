import { api } from '@api';
import type { Movie } from '@models';

export const recommendationApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRecommendations: builder.query<Movie[], void>({
            query: () => ({
                url: '/recommendations',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetRecommendationsQuery } = recommendationApi;
