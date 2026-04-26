import { Typography } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';

function App() {
    return (
        <ThemeProvider theme={getTheme('light')}>
            <CssBaseline />
            <div className="App">
                <Typography variant="h1" gutterBottom>
                    Streamify
                </Typography>
                <VideoPlayer
                    videoUrl={`${import.meta.env.VITE_BASE_URL}/hls/${import.meta.env.VITE_SAMPLE_VIDEOID}/index.m3u8`}
                    videoId={import.meta.env.VITE_SAMPLE_VIDEOID}
                />
            </div>
        </ThemeProvider>
    );
}

export default App;
