import type { carouselProps } from './Carousel.types';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import {
    Stack as MuiStack,
    Box as MuiBox,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Typography } from '@components/Typography';
import {
    StyledContainer,
    StyledContent,
    StyledOverlay,
    StyledSlide,
    StyledSwiper,
} from './Carousel.styles';
import { Button } from '@components/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Icon } from '@components/Icon';
import { useNavigate } from 'react-router-dom';

export const Carousel = (props: carouselProps) => {
    const { movies, watchlistButton } = props;
    const theme = useTheme();
    const isdesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <StyledSwiper
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
            >
                {movies.map((movie) => (
                    <StyledSlide key={movie._id}>
                        <MuiBox
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: {
                                    xs: 260,
                                    sm: 360,
                                    md: 520,
                                },
                                overflow: 'hidden',
                                backgroundImage: `url(${movie.thumbnail})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <StyledOverlay />

                            <StyledContent spacing={3}>
                                <Typography variant="h1">
                                    {movie.title}
                                </Typography>

                                <Typography
                                    variant={isdesktop ? 'h3' : 'body2'}
                                    color={theme.palette.grey[500]}
                                    sx={{
                                        maxWidth: {
                                            xs: '100%',
                                            md: 420,
                                        },
                                    }}
                                >
                                    {movie.description}
                                </Typography>
                                <MuiStack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Button
                                        onClick={() =>
                                            navigate('/movie/' + movie._id)
                                        }
                                    >
                                        <MuiStack
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <Icon
                                                icon={PlayCircleIcon}
                                                iconColor={
                                                    theme.palette.grey[100]
                                                }
                                                size={isdesktop ? 'md' : 'xs'}
                                            />
                                            <Typography
                                                variant={
                                                    isdesktop
                                                        ? 'body1'
                                                        : 'body2'
                                                }
                                                color={theme.palette.grey[100]}
                                            >
                                                PLAY NOW
                                            </Typography>
                                        </MuiStack>
                                    </Button>
                                    {watchlistButton(movie._id)}
                                </MuiStack>
                            </StyledContent>
                        </MuiBox>
                    </StyledSlide>
                ))}
            </StyledSwiper>
        </StyledContainer>
    );
};
