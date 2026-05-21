import type { movieCardProps } from './MovieCard.type';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import { Typography } from '@components/Typography';
import CardActions from '@mui/material/CardActions/CardActions';
import { StyledCard } from './MovieCard.styles';
import { useMediaQuery, useTheme } from '@mui/material';
import { WatchlistButton } from '@containers/WatchlistButton';

export const MovieCard = (props: movieCardProps) => {
    const { movie, watchlistButton } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <StyledCard>
            <CardMedia
                sx={{ height: 140 }}
                image={movie.thumbnail}
                title={movie.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography
                    variant={isDesktop ? 'subtitle1' : 'body1'}
                    color={theme.palette.grey[500]}
                    lines={3}
                >
                    {movie.description}
                </Typography>
            </CardContent>
            <CardActions>{watchlistButton(movie._id)}</CardActions>
        </StyledCard>
    );
};
