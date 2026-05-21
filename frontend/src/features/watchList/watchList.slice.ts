import type { watchListState } from './watchList.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialState: watchListState = {
    movies: [],
};

export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        setWatchList: (state, action: PayloadAction<{ movies: string[] }>) => ({
            ...state,
            movies: action.payload.movies,
        }),
    },
});

export const { setWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
