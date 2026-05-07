import { Typography } from '@components/Typography';
import { StyledBox, StyledButton } from './Form.styles';
import type { formProps } from './Form.types';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Icon } from '@components/Icon';
import {
    useMediaQuery,
    useTheme,
    CircularProgress as MuiCircularProgress,
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
    } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

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
