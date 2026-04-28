import { useAppSelector } from '@hooks';
import type { ProtectRouteProps } from './ProtectRoute.types';
import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from '@layout';

export const ProtectRoute = (
    props: ProtectRouteProps & { isProtected?: boolean },
) => {
    const { isProtected = true, showHeader = true } = props;
    const { authUser, isInitialized } = useAppSelector((state) => state.auth);

    if (!isInitialized) {
        return <div>Initializing...</div>;
    }

    if (isProtected && !authUser) {
        return <Navigate to="/login" replace />;
    }

    if (!isProtected && authUser) {
        return <Navigate to="/" replace />;
    }

    return (
        <Layout showHeader={showHeader}>
            <Outlet />
        </Layout>
    );
};
