import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SnackbarState, secverity } from './snackbar.types';

const initialState: SnackbarState = {
    open: false,
    message: '',
    severity: 'success',
};

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (
            state,
            action: PayloadAction<{ message: string; severity: secverity }>,
        ) => ({
            ...state,
            open: true,
            message: action.payload.message,
            severity: action.payload.severity,
        }),
        hideSnackbar: (state) => ({
            ...state,
            open: false,
        }),
    },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
