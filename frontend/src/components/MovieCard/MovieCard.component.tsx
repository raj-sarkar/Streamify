import type { movieCardProps } from './MovieCard.type';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import { Typography } from '@components/Typography';
import CardActions from '@mui/material/CardActions/CardActions';
import { StyledCard, StyledRating } from './MovieCard.styles';
import { useMediaQuery, useTheme, Stack as MuiStack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Icon } from '@components/Icon';
import { useNavigate } from 'react-router-dom';

export const MovieCard = (props: movieCardProps) => {
    const { movie, watchlistButton } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const navigate = useNavigate();

    return (
        <StyledCard onClick={() => navigate(`/movies/${movie._id}`)}>
            <CardMedia
                sx={{ height: 140 }}
                image={movie.thumbnail}
                title={movie.title}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant={isDesktop ? 'h5' : 'h4'}
                    component="div"
                >
                    {movie.title}
                </Typography>
                <Typography
                    variant={isDesktop ? 'subtitle1' : 'body1'}
                    color={theme.palette.grey[500]}
                    lines={3}
                >
                    {movie.description}
                </Typography>
                <MuiStack
                    direction="row"
                    mt={2}
                    justifyContent="space-between"
                    width="100%"
                >
                    <StyledRating
                        readOnly
                        value={movie.rating}
                        precision={0.1}
                    />
                    <MuiStack direction="row" alignItems="center" gap={2}>
                        <Icon icon={VisibilityIcon} />
                        <Typography variant="subtitle1">
                            {movie.views}
                        </Typography>
                    </MuiStack>
                </MuiStack>
            </CardContent>
            <CardActions>{watchlistButton(movie._id)}</CardActions>
        </StyledCard>
    );
};
