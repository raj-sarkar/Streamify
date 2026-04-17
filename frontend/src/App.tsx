import VideoPlayer from './VideoPlayer';

function App() {
    return (
        <div className="App">
            <h1>App</h1>
            <VideoPlayer
                videoUrl={`${import.meta.env.VITE_BASE_URL}/hls/${import.meta.env.VITE_SAMPLE_VIDEOID}/index.m3u8`}
                videoId={import.meta.env.VITE_SAMPLE_VIDEOID}
            />
        </div>
    );
}

export default App;
