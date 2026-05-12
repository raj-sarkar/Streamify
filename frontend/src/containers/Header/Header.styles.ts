import {
    AppBar as MuiAppBar,
    Box as MuiBox,
    Avatar as MuiAvatar,
    styled,
} from '@mui/material';
import type { AvatarProps as MuiAvatarProps } from '@mui/material';

export const StyledAppBar = styled(MuiAppBar)(
    ({
        theme: {
            palette,
            typography: { pxToRem },
            breakpoints,
        },
    }) => ({
        backgroundColor: palette.primary.contrastText,
        color: palette.primary.contrastText,
        height: pxToRem(48),

        [breakpoints.up('sm')]: {
            height: pxToRem(64),
        },
    }),
);

export const StyledBox = styled(MuiBox)(
    ({ theme: { palette, typography } }) => ({
        backgroundColor: palette.background.default,
        border: `${typography.pxToRem(1)} solid ${palette.grey[200]}`,
    }),
);

export const StyledAvatar = styled(MuiAvatar)<MuiAvatarProps>(
    ({
        theme: {
            palette,
            typography: { pxToRem },
        },
    }) => ({
        cursor: 'pointer',
        outline: 'none',
        border: 'none',

        '&:hover': {
            outline: `${palette.grey[400]} auto ${pxToRem(2)}`,
        },

        '&:focus': {
            outline: `${palette.grey[400]} auto ${pxToRem(2)}`,
        },
    }),
);
