import { Typography } from '@components/Typography';
import { StyledAppBar, StyledButton } from './Header.styles';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { IconButton } from '@components/IconButton';
import { Stack as MuiStack, useTheme } from '@mui/material';
import { useLazyLogoutQuery } from '@services';
import { setUser } from '@features/auth';
import { useAppDispatch } from '@hooks';

export const HeaderContainer = () => {
    const theme = useTheme();
    const [triggerLogout] = useLazyLogoutQuery();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        try {
            await triggerLogout().unwrap();
            dispatch(setUser({ user: null }));
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <StyledAppBar>
            <MuiStack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p={theme.spacing(0, 4)}
            >
                <MuiStack direction="row" alignItems="center" spacing={2}>
                    <IconButton
                        iconColor={theme.palette.primary.contrastText}
                        size="lg"
                        aria-label="home"
                        icon={LiveTvIcon}
                    />
                    <Typography variant="h6" component="div">
                        Streamify
                    </Typography>
                </MuiStack>
                <StyledButton variant="contained" onClick={handleLogout}>
                    <Typography variant="h4" color={theme.palette.primary.main}>
                        Log Out
                    </Typography>
                </StyledButton>
            </MuiStack>
        </StyledAppBar>
    );
};
