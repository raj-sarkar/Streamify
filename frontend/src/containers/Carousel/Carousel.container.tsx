import { useGetRecommendationsQuery } from '@services';
import { Box as MuiBox } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks';
import { showSnackbar } from '@features/snackbar';
import { Carousel } from '@components/Carousel';

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
    }, [error]);

    if (isLoading || isFetching) {
        return <div>Loading recommendations...</div>;
    }

    return (
        <MuiBox mt={5}>
            {movies && movies.length > 0 && <Carousel movies={movies} />}
        </MuiBox>
    );
};
