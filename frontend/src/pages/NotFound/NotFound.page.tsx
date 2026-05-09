import { NotFoundComponent } from '@components/NotFound';
import { Box as MuiBox, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotFoundImage from '@assets/error404.svg';

export const NotFoundPage = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const navigate = useNavigate();

    return (
        <MuiBox padding={6}>
            <NotFoundComponent
                isDesktop={isDesktop}
                imgSrc={NotFoundImage}
                heading="Page not found"
                description="The page you are looking for is not available"
                buttonText="Go To Home"
                onClick={() => void navigate('/')}
            />
        </MuiBox>
    );
};
