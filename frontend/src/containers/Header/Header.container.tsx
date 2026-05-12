import { Typography } from '@components/Typography';
import { StyledAppBar, StyledAvatar, StyledBox } from './Header.styles';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { IconButton } from '@components/IconButton';
import {
    Stack as MuiStack,
    Popover as MuiPopover,
    Avatar as MuiAvatar,
    Box as MuiBox,
    Divider as MuiDivider,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { useLazyLogoutQuery } from '@services';
import { setUser } from '@features/auth';
import { useAppDispatch, useAppSelector } from '@hooks';
import { useState } from 'react';
import { PopoverContent, type PopoverItem } from '@components/PopoverContent';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { showSnackbar } from '@features/snackbar';
import LoginIcon from '@mui/icons-material/Login';

export const HeaderContainer = () => {
    const theme = useTheme();
    const [triggerLogout] = useLazyLogoutQuery();
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'avatar-popover' : undefined;
    const user = useAppSelector((state) => state.auth.authUser);
    const navigate = useNavigate();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const handleLogout = async () => {
        try {
            await triggerLogout().unwrap();
            dispatch(setUser({ user: null }));
            dispatch(
                showSnackbar({
                    message: 'Logged out successfully.',
                    severity: 'success',
                }),
            );
        } catch (error) {
            dispatch(
                showSnackbar({
                    message: 'Logout failed. Please try again.',
                    severity: 'error',
                }),
            );
        }
    };

    const popoverData: PopoverItem[] = [
        {
            id: 'item-1',
            text: 'Profile',
            icon: PersonIcon,
            clickFunction: () => {
                setAnchorEl(null);
                void navigate(`/profile/${user?._id}`);
            },
            show: !!user,
        },
        {
            id: 'item-2',
            text: 'Log out',
            icon: LogoutIcon,
            clickFunction: async () => {
                handleLogout();
                setAnchorEl(null);
            },
            show: !!user,
        },
        {
            id: 'item-3',
            text: 'Log In',
            icon: LoginIcon,
            clickFunction: () => {
                void navigate('/login');
                setAnchorEl(null);
            },
            show: !user,
        },
    ];

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
                        iconColor={theme.palette.primary.main}
                        size={isDesktop ? 'lg' : 'md'}
                        aria-label="home"
                        icon={LiveTvIcon}
                    />
                    <Typography variant="h2" color={theme.palette.primary.main}>
                        Streamify
                    </Typography>
                </MuiStack>
                <StyledAvatar
                    alt={user?.name}
                    src={user?.profilePicture}
                    component="button"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                />
                <MuiPopover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <StyledBox padding={4} width={200}>
                        <MuiStack
                            direction="row"
                            gap={3}
                            marginBottom={2}
                            alignItems="center"
                        >
                            <MuiAvatar
                                src={user?.profilePicture}
                                alt="User profile image"
                                aria-label="See user details"
                                aria-describedby={id}
                            />
                            <MuiBox>
                                <Typography variant="subtitle1">
                                    {user?.name}
                                </Typography>
                            </MuiBox>
                        </MuiStack>
                        <MuiDivider
                            component="hr"
                            color={theme.palette.grey[300]}
                        />
                        <MuiStack marginTop={theme.spacing(2)} gap={2}>
                            {popoverData.map((item) => (
                                <PopoverContent
                                    popoverItem={item}
                                    key={item.id}
                                />
                            ))}
                            {/* <StyledFormGroup>
                                <MuiFormControlLabel
                                    control={
                                        <StyledSwitch
                                            checked={mode === 'dark'}
                                            onChange={handleToggleMode}
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            Toggle Theme
                                        </Typography>
                                    }
                                />
                            </StyledFormGroup> */}
                        </MuiStack>
                    </StyledBox>
                </MuiPopover>
            </MuiStack>
        </StyledAppBar>
    );
};
