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
        email: '',
        password: '',
    });
    const [loginErrors, setLoginErrors] = useState({
        email: '',
        password: '',
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dispatch = useAppDispatch();

    const loginFieldItems: InputFieldItem[] = [
        {
            id: 'email',
            icon: EmailIcon,
            onChange: (e) => {
                setLoginData((prev) => ({ ...prev, email: e.target.value }));
                if (!e.target.value)
                    setLoginErrors((prev) => ({
                        ...prev,
                        email: 'Email is required',
                    }));
                else if (!emailRegex.test(e.target.value))
                    setLoginErrors((prev) => ({
                        ...prev,
                        email: 'Invalid email format',
                    }));
                else setLoginErrors((prev) => ({ ...prev, email: '' }));
            },
            placeholder: 'Email',
            error: loginErrors.email,
        },
        {
            id: 'password',
            icon: KeyIcon,
            onChange: (e) => {
                setLoginData((prev) => ({ ...prev, password: e.target.value }));
                if (e.target.value)
                    setLoginErrors((prev) => ({ ...prev, password: '' }));
                else
                    setLoginErrors((prev) => ({
                        ...prev,
                        password: 'Password is required',
                    }));
            },
            placeholder: 'Password',
            error: loginErrors.password,
            type: 'password',
        },
    ];

    const validateForm = () => {
        let c = 0;

        if (!loginData.email) {
            setLoginErrors((prev) => ({ ...prev, email: 'Email is required' }));
            c++;
        }
        if (!loginData.password) {
            setLoginErrors((prev) => ({
                ...prev,
                password: 'Password is required',
            }));
            c++;
        }
        return c === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
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
