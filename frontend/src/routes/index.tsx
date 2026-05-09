import { ProtectRoute } from '@protectRoute';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '@pages/Login/';
import { NotFoundPage } from '@pages/NotFound';
import { SignupPage } from '@pages/Signup/Signup.page';

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
            {
                path: '/signup',
                element: <SignupPage />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

export default router;
