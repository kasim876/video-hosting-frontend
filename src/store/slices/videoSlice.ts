import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {IVideoState} from '@/types/video';

const initialState: IVideoState = {
  loading: false,
  videos: null,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    fetchVideos: state => {
      state.loading = true;
    },
    fetchVideosSuccess: (state, action: PayloadAction<IVideoState>) => {
      state.loading = false;
      state.videos = action.payload.videos;
    },
  },
});

export const {fetchVideos, fetchVideosSuccess} = videoSlice.actions;

export default videoSlice.reducer;
