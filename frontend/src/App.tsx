import {
    ThemeProvider,
    CssBaseline,
    Snackbar as MuiSnackbar,
    Alert as MuiAlert,
    type SnackbarCloseReason,
} from '@mui/material';
import { getTheme } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from '@routes';
import { useCurrentUserQuery } from '@services';
import { useEffect } from 'react';
import { setUser } from '@features/auth';
import { useAppDispatch, useAppSelector } from '@hooks';
import { hideSnackbar } from '@features/snackbar';
import { Typography } from '@components/Typography';

function App() {
    const { data: currentUser, error } = useCurrentUserQuery();
    const dispatch = useAppDispatch();
    const { open, message, severity } = useAppSelector(
        (state) => state.snackbar,
    );

    const handleClose = (
        _?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(hideSnackbar());
    };

    useEffect(() => {
        if (currentUser) {
            dispatch(setUser({ user: currentUser }));
        } else if (error) {
            console.error('Failed to fetch current user:', error);
            dispatch(setUser({ user: null }));
        }
    }, [currentUser, error, dispatch]);

    return (
        <ThemeProvider theme={getTheme('dark')}>
            <CssBaseline />
            <RouterProvider router={router} />
            <MuiSnackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MuiAlert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                >
                    <Typography variant="subtitle1">{message}</Typography>
                </MuiAlert>
            </MuiSnackbar>
        </ThemeProvider>
    );
}

export default App;
