import { useLazyLoginQuery } from '@services';
import type { InputFieldItem } from '@components/InputField';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import type { loginCredentials } from './Login.types';
import { setUser } from '@features/auth';
import { useAppDispatch } from '@hooks';
import { Form } from '@components/Form';

export const LoginContainer = () => {
    const [login, { isLoading, isFetching }] = useLazyLoginQuery();
    const [loginData, setLoginData] = useState<loginCredentials>({
        email: 'admin@example.com',
        password: 'admin123',
    });
    const dispatch = useAppDispatch();

    const loginFieldItems: InputFieldItem[] = [
        {
            id: 'email',
            icon: EmailIcon,
            onChange: (e) =>
                setLoginData((prev) => ({ ...prev, email: e.target.value })),
            placeholder: 'Email',
            error: '',
        },
        {
            id: 'password',
            icon: KeyIcon,
            onChange: (e) =>
                setLoginData((prev) => ({ ...prev, password: e.target.value })),
            placeholder: 'Password',
            error: '',
            type: 'password',
        },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await login(loginData).unwrap();
            dispatch(setUser({ user: data.user }));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Form
                heading="Log in to your account"
                fields={loginFieldItems}
                btnText="Log in"
                onSubmit={handleSubmit}
                isLoading={isFetching || isLoading}
                text="Don't have an account?"
                linkText="Sign up"
                linkTo="/signup"
            />
        </>
    );
};
