import { Form } from '@components/Form';
import type { InputFieldItem } from '@components/InputField/InputField.types';
import { setUser } from '@features/auth';
import { useAppDispatch } from '@hooks';
import { useState } from 'react';
import { useLazySignupQuery } from 'services/auth.service';
import type { signupCredentials } from './Signup.types';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';

export const SignupContainer = () => {
    const [signup, { isLoading, isFetching }] = useLazySignupQuery();
    const [signupData, setSignupData] = useState<signupCredentials>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: null,
    });
    const [signupErrors, setSignupErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dispatch = useAppDispatch();

    const signupFieldItems: InputFieldItem[] = [
        {
            id: 'name',
            icon: PersonIcon,
            onChange: (e) => {
                setSignupData((prev) => ({ ...prev, name: e.target.value }));
                if (!e.target.value)
                    setSignupErrors((prev) => ({
                        ...prev,
                        name: 'Name is required',
                    }));
                else setSignupErrors((prev) => ({ ...prev, name: '' }));
            },
            placeholder: 'Name',
            error: signupErrors.name,
        },
        {
            id: 'email',
            icon: EmailIcon,
            onChange: (e) => {
                setSignupData((prev) => ({ ...prev, email: e.target.value }));
                if (!e.target.value)
                    setSignupErrors((prev) => ({
                        ...prev,
                        email: 'Email is required',
                    }));
                else if (!emailRegex.test(e.target.value))
                    setSignupErrors((prev) => ({
                        ...prev,
                        email: 'Invalid email format',
                    }));
                else setSignupErrors((prev) => ({ ...prev, email: '' }));
            },
            placeholder: 'Email',
            error: signupErrors.email,
        },
        {
            id: 'password',
            icon: KeyIcon,
            onChange: (e) => {
                setSignupData((prev) => ({
                    ...prev,
                    password: e.target.value,
                }));
                if (!e.target.value)
                    setSignupErrors((prev) => ({
                        ...prev,
                        password: 'Password is required',
                    }));
                else setSignupErrors((prev) => ({ ...prev, password: '' }));
            },
            placeholder: 'Password',
            error: signupErrors.password,
            type: 'password',
        },
        {
            id: 'confirmPassword',
            icon: KeyIcon,
            onChange: (e) => {
                setSignupData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                }));
                if (!e.target.value)
                    setSignupErrors((prev) => ({
                        ...prev,
                        confirmPassword: 'Please confirm your password',
                    }));
                else if (e.target.value !== signupData.password)
                    setSignupErrors((prev) => ({
                        ...prev,
                        confirmPassword: 'Passwords do not match',
                    }));
                else
                    setSignupErrors((prev) => ({
                        ...prev,
                        confirmPassword: '',
                    }));
            },
            placeholder: 'Confirm Password',
            error: signupErrors.confirmPassword,
            type: 'password',
        },
    ];

    const validateForm = () => {
        let c = 0;
        if (!signupData.name) {
            setSignupErrors((prev) => ({ ...prev, name: 'Name is required' }));
            c++;
        }
        if (!signupData.email) {
            setSignupErrors((prev) => ({
                ...prev,
                email: 'Email is required',
            }));
            c++;
        }
        if (!signupData.password) {
            setSignupErrors((prev) => ({
                ...prev,
                password: 'Password is required',
            }));
            c++;
        }
        if (!signupData.confirmPassword) {
            setSignupErrors((prev) => ({
                ...prev,
                confirmPassword: 'Please confirm your password',
            }));
            c++;
        }
        if (signupData.password !== signupData.confirmPassword) {
            setSignupErrors((prev) => ({
                ...prev,
                confirmPassword: 'Passwords do not match',
            }));
            c++;
        }
        return c === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        const formData = new FormData();

        formData.append('name', signupData.name);
        formData.append('email', signupData.email);
        formData.append('password', signupData.password);
        formData.append('confirmPassword', signupData.confirmPassword);

        if (signupData.profilePicture) {
            formData.append('profilePicture', signupData.profilePicture);
        }

        try {
            const data = await signup(formData).unwrap();

            dispatch(setUser({ user: data.user }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form
            heading="Create an account"
            fields={signupFieldItems}
            btnText="Sign Up"
            isLoading={isLoading || isFetching}
            linkText="Log in"
            linkTo="/login"
            text="Already have an account?"
            onSubmit={handleSubmit}
            picture={signupData.profilePicture}
            setPicture={(image) =>
                setSignupData((prev) => ({ ...prev, profilePicture: image }))
            }
        />
    );
};
