import {IComment, ICommentDto} from '@/types/comment.interface';

import {api} from './api';

export const commentApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<IComment, ICommentDto>({
      query: body => ({
        url: `comment/${body.videoId}`,
        method: 'POST',
        body: {message: body.message},
      }),
      invalidatesTags: (result, error, {videoId}) => [{type: 'Video', id: videoId}],
    }),
  }),
});

export const {useCreateCommentMutation} = commentApi;
