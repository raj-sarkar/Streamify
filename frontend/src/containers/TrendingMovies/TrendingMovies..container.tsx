import { useGetTrendingMoviesQuery } from '@services';
import { Box as MuiBox } from '@mui/material';
import { StyledBox } from './TrendingMovies.styles';
import { MovieCard } from '@components/MovieCard';
import { Typography } from '@components/Typography';
import { WatchlistButton } from '@containers/WatchlistButton';

export const TrendingMovies = () => {
    const { data, isLoading, isFetching } = useGetTrendingMoviesQuery();

    if (isLoading || isFetching) {
        return <Typography variant="h4">Loading...</Typography>;
    }

    return (
        <MuiBox px={4}>
            <Typography variant="h2" mb={4}>
                Trending Movies
            </Typography>
            <StyledBox>
                {data?.map((movie) => (
                    <MovieCard
                        movie={movie}
                        key={movie._id}
                        watchlistButton={(movieId) => (
                            <WatchlistButton movieId={movieId} />
                        )}
                    />
                ))}
            </StyledBox>
        </MuiBox>
    );
};
