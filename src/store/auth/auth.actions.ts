import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {IAuthData, IAuthFields} from '@/types/auth.interface';

import AuthService from '@/services/auth.service';

export const register = createAsyncThunk<IAuthData, IAuthFields>(
  'auth/register',
  async ({email, name, password}, {rejectWithValue}) => {
    try {
      const response = await AuthService.register(email, name, password);

      return response;
    } catch (error) {
      const err = error as AxiosError<Error>;
      alert(err.response?.data.message);

      return rejectWithValue(err.response?.data.message);
    }
  },
);

export const login = createAsyncThunk<IAuthData, IAuthFields>(
  'auth/login',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const response = await AuthService.login(email, password);

      return response;
    } catch (error) {
      const err = error as AxiosError<Error>;
      alert(err.response?.data.message);

      return rejectWithValue(err.response?.data.message);
    }
  },
);

export const logout = createAsyncThunk<any, any>('auth/logout', async () => {
  return {};
});
