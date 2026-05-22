import { Card as MuiCard, Rating as MuiRating, styled } from '@mui/material';

export const StyledCard = styled(MuiCard)(({ theme: { palette } }) => ({
    width: '100%',
    borderRadius: 4,
    backgroundColor: palette.primary.dark,
    cursor: 'pointer',
    border: `2px solid transparent`,

    '&:hover': {
        border: `2px solid ${palette.primary.contrastText}`,
    },
}));

export const StyledRating = styled(MuiRating)(({ theme: { palette } }) => ({
    '& .MuiRating-iconEmpty': {
        color: palette.primary.contrastText,
    },
}));
