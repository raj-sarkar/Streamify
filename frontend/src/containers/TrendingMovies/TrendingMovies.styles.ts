import { Box as MuiBox, styled } from '@mui/material';

export const StyledBox = styled(MuiBox)(
    ({ theme: { spacing, breakpoints } }) => ({
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: spacing(4),
        alignItems: 'stretch',

        [breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        },

        [breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },
    }),
);
