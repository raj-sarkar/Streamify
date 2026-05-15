import type { Movie } from '@models';

export interface carouselProps {
    movies: Movie[];
    watchList: string[];
    addToWatchList: (movieId: string) => void;
    removeFromWatchList: (movieId: string) => void;
    isLoading: boolean;
}
