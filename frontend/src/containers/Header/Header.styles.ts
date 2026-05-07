import { AppBar as MuiAppBar, styled } from '@mui/material';

export const StyledAppBar = styled(MuiAppBar)(({ theme: { palette } }) => ({
    backgroundColor: palette.primary.light,
    color: palette.primary.contrastText,
}));
