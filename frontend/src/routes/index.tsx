import { ProtectRoute } from '@protectRoute';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@pages/Login/';

const router = createBrowserRouter([
    {
        element: <ProtectRoute />,
        children: [
            {
                path: '/',
                element: <div>Home</div>,
            },
        ],
    },
    {
        element: <ProtectRoute isProtected={false} showHeader={false} />,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
            },
        ],
    },
]);

export default router;
