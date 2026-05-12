import type { StackProps as MuiStackProps } from '@mui/material';
import { Stack as MuiStack, styled } from '@mui/material';

export const StyledStack = styled(MuiStack)<MuiStackProps>(
    ({ theme: { palette, typography, spacing } }) => ({
        padding: spacing(2),
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease-in-out',
        color: palette.primary.contrastText,
        borderRadius: `${typography.pxToRem(10)}`,
        border: 'none',
        backgroundColor: palette.primary.light,

        '&:hover': {
            backgroundColor: palette.grey[200],
        },

        '&:focus': {
            outline: `${typography.pxToRem(1)} solid ${palette.grey[900]}`,
        },
    }),
);
