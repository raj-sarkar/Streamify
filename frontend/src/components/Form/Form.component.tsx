import { Typography } from '@components/Typography';
import { StyledBox, StyledButton, StyledIconButton } from './Form.styles';
import type { formProps } from './Form.types';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EditIcon from '@mui/icons-material/Edit';
import { Icon } from '@components/Icon';
import {
    useMediaQuery,
    useTheme,
    CircularProgress as MuiCircularProgress,
    Stack as MuiStack,
    Avatar as MuiAvatar,
    Box as MuiBox,
} from '@mui/material';
import { InputField } from '@components/InputField';
import { NavLink } from 'react-router-dom';

export const Form = (props: formProps) => {
    const {
        btnText,
        fields,
        heading,
        onSubmit,
        isLoading,
        text,
        linkText,
        linkTo,
        picture,
        setPicture,
    } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            if (setPicture) setPicture(file);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <StyledBox>
                <Icon
                    icon={LiveTvIcon}
                    size={isDesktop ? 'lg' : 'md'}
                    iconColor={theme.palette.secondary.main}
                />
                <Typography variant={isDesktop ? 'h5' : 'subtitle1'}>
                    {heading}
                </Typography>
                {setPicture && (
                    <MuiStack direction="row" justifyContent="center">
                        <MuiBox position="relative">
                            <MuiAvatar
                                src={
                                    picture ? URL.createObjectURL(picture) : ''
                                }
                                alt="Profile Picture"
                                sx={{ width: 80, height: 80, mb: 2 }}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="profile-picture-input"
                                onChange={handleImageChange}
                            />
                            <StyledIconButton
                                icon={EditIcon}
                                onClick={() =>
                                    document
                                        .getElementById('profile-picture-input')
                                        ?.click()
                                }
                                iconColor={theme.palette.primary.main}
                                size="xs"
                            />
                        </MuiBox>
                    </MuiStack>
                )}
                {fields.map((item) => (
                    <InputField inputFieldItem={item} key={item.id} />
                ))}
                <StyledButton type="submit">
                    {isLoading ? (
                        <MuiCircularProgress color="inherit" size={20} />
                    ) : (
                        <Typography
                            variant="h4"
                            color={theme.palette.primary.main}
                        >
                            {btnText}
                        </Typography>
                    )}
                </StyledButton>
                <Typography variant="subtitle2">
                    {text}
                    <NavLink to={linkTo} style={{ textDecoration: 'none' }}>
                        <Typography component="span" color="secondary.main">
                            {' '}
                            {linkText}
                        </Typography>
                    </NavLink>
                </Typography>
            </StyledBox>
        </form>
    );
};
