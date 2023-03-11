import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {IVideo, IVideoState} from '@/types/video';

const initialState: IVideoState = {
  loading: false,
  videos: null,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    loadingVideos: state => {
      state.loading = true;
    },
    loadingVideosSuccess: (state, action: PayloadAction<IVideo[]>) => {
      state.loading = false;
      state.videos = action.payload;
    },
  },
});

export const {loadingVideos, loadingVideosSuccess} = videoSlice.actions;

export default videoSlice.reducer;
