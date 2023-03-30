import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {IUser} from '@/types/user.interface';

import {TypeRootState} from './store';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/' + 'api/',
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as TypeRootState).auth.accessToken;

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: builder => ({
    getProfile: builder.query<IUser, any>({
      query: () => 'user/profile',
      providesTags: () => [{type: 'Profile'}],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {useGetProfileQuery} = api;
