import {createSlice} from '@reduxjs/toolkit';

import {IAuthState} from '@/types/auth.interface';

import {login, logout, register} from './auth.actions';

const initialState: IAuthState = {
  user: null,
  accessToken: '',
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, {payload}) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.loading = false;
      })
      .addCase(register.rejected, state => {
        state.user = null;
        state.accessToken = '';
        state.loading = false;
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.loading = false;
      })
      .addCase(login.rejected, state => {
        state.user = null;
        state.accessToken = '';
        state.loading = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.accessToken = '';
        state.loading = false;
      });
  },
});
