import {api} from '@api';
import type { loginCredentials } from '@containers/Login';
import type { User } from '@models';

export const authApi = api.injectEndpoints({
    endpoints: builder=> ({
        login: builder.query<{user: User}, loginCredentials>({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.query({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),
        signup: builder.query({
            query: (data) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data,
            }),
        }),
        currentUser: builder.query<User,void>({
            query: () => ({
                url: '/auth/current',
                method: 'GET',
            }),
        }),
    }),
});

export const {useLazyLoginQuery, useLazyLogoutQuery, useLazySignupQuery, useCurrentUserQuery} = authApi;
