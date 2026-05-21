import type { Movie } from '@models';

export interface carouselProps {
    movies: Movie[];
    watchlistButton: (movieId: string) => JSX.Element;
}
