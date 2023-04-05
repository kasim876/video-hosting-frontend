import {IVideo} from '@/types/video.interface';

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
  }),
});

export const {useGetVideoByIdQuery, useGetVideoBySearchQuery} = videoApi;
