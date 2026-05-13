import type { LayoutProps } from './Layout.types';
import {
    Stack as MuiStack,
    Box as MuiBox,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { HeaderContainer } from '@containers/Header';

export const Layout = (props: LayoutProps) => {
    const { children, showHeader = true } = props;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            {showHeader && <HeaderContainer />}
            <MuiStack
                direction="row"
                justifyContent="center"
                minHeight="100vh"
                bgcolor={theme.palette.primary.main}
                mt={isDesktop ? 16 : 12}
            >
                <MuiBox component="main" maxWidth={1600} p={2}>
                    {children}
                </MuiBox>
            </MuiStack>
        </>
    );
};
