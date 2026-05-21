import { Icon } from '@components/Icon';
import { showSnackbar } from '@features/snackbar';
import { useAppDispatch } from '@hooks';
import type { errorType } from '@models';
import {
    CircularProgress as MuiCircularProgress,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    useLazyAddToWatchListQuery,
    useLazyGetWatchListQuery,
    useLazyRemoveFromWatchListQuery,
} from '@services';
import { useCallback, useEffect, useState } from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import type { watchlistButtonProps } from './WatchlistButton.types';
import { StyledButton } from './WatchlistButton.styles';

export const WatchlistButton = (props: watchlistButtonProps) => {
    const { movieId } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
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
    const isLoading =
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

    return (
        <StyledButton
            bgColor={theme.palette.grey[700]}
            disabled={isLoading}
            onClick={() => {
                if (watchList.includes(movieId)) {
                    removeFromWatchListHandler(movieId);
                } else {
                    addToWatchListHandler(movieId);
                }
            }}
        >
            {isLoading ? (
                <MuiCircularProgress
                    size={isDesktop ? 20 : 16}
                    sx={{
                        color: theme.palette.grey[100],
                    }}
                />
            ) : (
                <Icon
                    icon={
                        watchList.includes(movieId)
                            ? BookmarkAddedIcon
                            : BookmarkAddIcon
                    }
                    iconColor={theme.palette.grey[100]}
                    size={isDesktop ? 'sm' : 'xs'}
                />
            )}
        </StyledButton>
    );
};
