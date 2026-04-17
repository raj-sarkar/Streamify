import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

const VideoPlayer = ({
    videoUrl,
    videoId,
}: {
    videoUrl: string;
    videoId: string;
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    console.log('Video ID:', videoId, 'Video URL:', videoUrl);
    useEffect(() => {
        if (!videoRef.current) return;

        let hls: Hls | null = null;

        if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(videoRef.current);
        } else {
            videoRef.current.src = videoUrl;
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [videoUrl]);

    useEffect(() => {
        const fetchProgress = async () => {
            const res = await fetch(
                `${import.meta.env.VITE_BASE_URL}/api/stream/course/${videoId}`,
                {
                    credentials: 'include',
                },
            );
            const data = await res.json();

            if (videoRef.current && data.timestamp) {
                videoRef.current.currentTime = data.timestamp;
            }
        };

        fetchProgress();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                fetch(`${import.meta.env.VITE_BASE_URL}/api/stream/progress`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        videoId,
                        timestamp: videoRef.current.currentTime,
                    }),
                });
            }
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return <video ref={videoRef} controls width="600" />;
};

export default VideoPlayer;
