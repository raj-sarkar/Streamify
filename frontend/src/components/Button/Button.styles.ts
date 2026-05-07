import { Button as MuiButton, darken, styled } from '@mui/material';

import type { StyledButtonProps } from './Button.types';

const customProps: PropertyKey[] = ['bgColor'];

export const StyledButton = styled(MuiButton, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledButtonProps>(({ theme: { palette, typography }, bgColor }) => ({
    backgroundColor: bgColor ?? palette.secondary.main,
    textTransform: 'none',
    borderRadius: typography.pxToRem(10),
    width: 'fit-content',

    '&:hover': {
        backgroundColor: darken(bgColor ?? palette.secondary.main, 0.2),
    },

    '&:focus': {
        backgroundColor: darken(bgColor ?? palette.secondary.main, 0.2),
    },
}));
