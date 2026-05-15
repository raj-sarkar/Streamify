import type { Movie } from './movie.model';

export interface WatchListItem {
    _id: string;
    userId: string;
    movieId: Movie;
}
