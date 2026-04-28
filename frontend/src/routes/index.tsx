import { ProtectRoute } from '@protectRoute';
import { createBrowserRouter } from 'react-router-dom';

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
                element: <div>Login</div>,
            },
        ],
    },
]);

export default router;
