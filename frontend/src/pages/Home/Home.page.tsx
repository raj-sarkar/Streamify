import { CarouselContainer } from '@containers/Carousel';
import { TrendingMovies } from '@containers/TrendingMovies';
import { Stack as MuiStack } from '@mui/material';

export const HomePage = () => {
    return (
        <MuiStack mt={5} spacing={4}>
            <CarouselContainer />
            <TrendingMovies />
        </MuiStack>
    );
};
