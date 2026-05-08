import { darken, AppBar as MuiAppBar, styled } from '@mui/material';
import { Button } from '@components/Button';

export const StyledAppBar = styled(MuiAppBar)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
        },
    }) => ({
        backgroundColor: palette.primary.light,
        color: palette.primary.contrastText,
        height: pxToRem(64),
    }),
);

export const StyledButton = styled(Button)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
        },
    }) => ({
        height: pxToRem(40),

        '&:hover': {
            backgroundColor: darken(palette.secondary.main, 0.2),
        },
    }),
);
