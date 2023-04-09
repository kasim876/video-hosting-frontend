import {IVideo, IVideoDto} from '@/types/video.interface';

import {api} from './api';

export const videoApi = api.injectEndpoints({
  endpoints: builder => ({
    getVideoBySearch: builder.query<IVideo[], string>({
      query: searchQuery => ({
        url: `video`,
        params: {
          search: searchQuery,
        },
      }),
    }),
    getVideoById: builder.query<IVideo, number>({
      query: id => `video/by-id/${id}`,
      providesTags: (result, error, id) => [{type: 'Video', id}],
    }),
    updateViews: builder.mutation<IVideo, number>({
      query: id => ({
        url: `video/update-views/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{type: 'Video', id}],
    }),
    createVideo: builder.mutation<IVideo, IVideoDto>({
      query: body => ({
        url: `video`,
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [{type: 'Profile'}],
    }),
  }),
});

export const {useGetVideoByIdQuery, useGetVideoBySearchQuery, useCreateVideoMutation, useUpdateViewsMutation} =
  videoApi;
