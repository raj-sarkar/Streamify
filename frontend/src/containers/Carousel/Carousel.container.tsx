import {
    useGetRecommendationsQuery,
    useLazyAddToWatchListQuery,
    useLazyRemoveFromWatchListQuery,
    useLazyGetWatchListQuery,
} from '@services';
import { Box as MuiBox } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@hooks';
import { showSnackbar } from '@features/snackbar';
import { Carousel } from '@components/Carousel';
import type { errorType } from '@models';

export const CarouselContainer = () => {
    const {
        data: movies,
        error,
        isLoading,
        isFetching,
    } = useGetRecommendationsQuery();
    const [
        getWatchList,
        { isLoading: watchListLoading, isFetching: watchListFetching },
    ] = useLazyGetWatchListQuery();
    const [
        addToWatchList,
        {
            isLoading: addToWatchListLoading,
            isFetching: addToWatchListFetching,
        },
    ] = useLazyAddToWatchListQuery();
    const [
        removeFromWatchList,
        {
            isLoading: removeFromWatchListLoading,
            isFetching: removeFromWatchListFetching,
        },
    ] = useLazyRemoveFromWatchListQuery();
    const dispatch = useAppDispatch();
    const isListLoading =
        watchListLoading ||
        watchListFetching ||
        addToWatchListLoading ||
        addToWatchListFetching ||
        removeFromWatchListLoading ||
        removeFromWatchListFetching;
    const [watchList, setWatchList] = useState<string[]>([]);

    const fetchWatchList = useCallback(async () => {
        try {
            const data = await getWatchList().unwrap();
            setWatchList(data.map((item) => item.movieId._id));
        } catch (error) {
            console.error('Failed to fetch watchlist:', error);
            dispatch(
                showSnackbar({
                    message:
                        (error as errorType)?.data?.message ||
                        'Failed to load watchlist',
                    severity: 'error',
                }),
            );
        }
    }, [dispatch]);

    useEffect(() => {
        fetchWatchList();
    }, [fetchWatchList]);

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

    const addToWatchListHandler = async (movieId: string) => {
        try {
            await addToWatchList(movieId).unwrap();
            dispatch(
                showSnackbar({
                    message: 'Added to watchlist',
                    severity: 'success',
                }),
            );
            fetchWatchList();
        } catch (err) {
            console.error(err);
            dispatch(
                showSnackbar({
                    message:
                        (err as errorType)?.data?.message ||
                        'Failed to add to watchlist',
                    severity: 'error',
                }),
            );
        }
    };

    const removeFromWatchListHandler = async (movieId: string) => {
        try {
            await removeFromWatchList(movieId).unwrap();
            dispatch(
                showSnackbar({
                    message: 'Removed from watchlist',
                    severity: 'success',
                }),
            );
            fetchWatchList();
        } catch (err) {
            console.error(err);
            dispatch(
                showSnackbar({
                    message:
                        (err as errorType)?.data?.message ||
                        'Failed to remove from watchlist',
                    severity: 'error',
                }),
            );
        }
    };

    if (isLoading || isFetching) {
        return <div>Loading recommendations...</div>;
    }

    return (
        <MuiBox mt={5}>
            {movies && movies.length > 0 && (
                <Carousel
                    movies={movies}
                    watchList={watchList}
                    isLoading={isListLoading}
                    addToWatchList={addToWatchListHandler}
                    removeFromWatchList={removeFromWatchListHandler}
                />
            )}
        </MuiBox>
    );
};
