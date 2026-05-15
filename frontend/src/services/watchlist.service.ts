import { api } from '@api';
import type { WatchListItem } from 'models';

export const watchlistApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getWatchList: builder.query<WatchListItem[], void>({
            query: () => ({
                url: '/watchlist',
                method: 'GET',
            }),
        }),
        addToWatchList: builder.query<void, string>({
            query: (movieId) => ({
                url: `/watchlist/${movieId}`,
                method: 'POST',
            }),
        }),
        removeFromWatchList: builder.query<void, string>({
            query: (movieId) => ({
                url: `/watchlist/${movieId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useLazyAddToWatchListQuery,
    useGetWatchListQuery,
    useLazyRemoveFromWatchListQuery,
    useLazyGetWatchListQuery,
} = watchlistApi;
