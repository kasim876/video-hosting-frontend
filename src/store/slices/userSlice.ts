import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {IUserState} from '@/types/user';

const initialState: IUserState = {
  user: null,
  accessToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
