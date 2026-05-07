import type { LayoutProps } from './Layout.types';
import { Stack as MuiStack, Box as MuiBox, useTheme } from '@mui/material';
import { HeaderContainer } from '@containers/Header';

export const Layout = (props: LayoutProps) => {
    const { children, showHeader = true } = props;
    const theme = useTheme();

    return (
        <>
            {showHeader && <HeaderContainer />}
            <MuiStack direction="row" justifyContent="center" minHeight="100vh" bgcolor={theme.palette.primary.main}>
                <MuiBox component="main" maxWidth={1600} p={2}>
                    {children}
                </MuiBox>
            </MuiStack>
        </>
    );
};
