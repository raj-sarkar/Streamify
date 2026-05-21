import type { Movie } from '@models';
import type { BoxProps as MuiBoxProps } from '@mui/material';

export interface movieCardProps extends MuiBoxProps {
    movie: Movie;
    watchlistButton: (movieId: string) => JSX.Element;
}
