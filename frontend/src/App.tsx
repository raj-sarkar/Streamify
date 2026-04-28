import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';
import { RouterProvider } from 'react-router-dom';
import router from '@routes';

function App() {
    return (
        <ThemeProvider theme={getTheme('light')}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
