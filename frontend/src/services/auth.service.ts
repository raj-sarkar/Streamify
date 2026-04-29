import {api} from '@api';

export const authApi = api.injectEndpoints({
    endpoints: builder=> ({
        login: builder.query({
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
    }),
});

export const {useLazyLoginQuery, useLazyLogoutQuery, useLazySignupQuery} = authApi;
