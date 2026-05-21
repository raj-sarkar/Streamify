import { Card as MuiCard, styled } from '@mui/material';

export const StyledCard = styled(MuiCard)(({ theme: { palette } }) => ({
    width: '100%',
    borderRadius: 4,
    backgroundColor: palette.primary.dark,
}));
