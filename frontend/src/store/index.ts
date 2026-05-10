import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@features/auth';
import { snackbarReducer } from '@features/snackbar';
import { api } from '@api';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        snackbar: snackbarReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
