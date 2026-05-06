import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from '@routes';
import { useCurrentUserQuery } from '@services';
import { useEffect } from 'react';
import { setUser } from '@features/auth';
import { useAppDispatch } from '@hooks';

function App() {
    const { data: currentUser, error } = useCurrentUserQuery();
    const dispatch = useAppDispatch();

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
        </ThemeProvider>
    );
}

export default App;
