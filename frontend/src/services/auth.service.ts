import { api } from '@api';
import type { User } from '@models';
import type { loginCredentials } from '@containers/Login';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query<{ user: User }, loginCredentials>({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.query<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),
        signup: builder.query<{ user: User }, FormData>({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        currentUser: builder.query<User, void>({
            query: () => ({
                url: '/auth/current',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useLazyLoginQuery,
    useLazyLogoutQuery,
    useLazySignupQuery,
    useCurrentUserQuery,
} = authApi;
