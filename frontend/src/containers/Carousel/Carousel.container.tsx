import { useGetRecommendationsQuery } from '@services';
import { Box as MuiBox } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks';
import { showSnackbar } from '@features/snackbar';
import { Carousel } from '@components/Carousel';
import { WatchlistButton } from '@containers/WatchlistButton';

export const CarouselContainer = () => {
    const {
        data: movies,
        error,
        isLoading,
        isFetching,
    } = useGetRecommendationsQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (error) {
            console.error(error);
            dispatch(
                showSnackbar({
                    message: 'Failed to load recommendations',
                    severity: 'error',
                }),
            );
        }
    }, [error, dispatch]);

    if (isLoading || isFetching) {
        return <div>Loading recommendations...</div>;
    }

    return (
        <MuiBox>
            {movies && movies.length > 0 && (
                <Carousel
                    movies={movies}
                    watchlistButton={(movieId) => (
                        <WatchlistButton movieId={movieId} />
                    )}
                />
            )}
        </MuiBox>
    );
};
