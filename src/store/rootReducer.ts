import {combineReducers} from 'redux';

import {api} from './api';
import {authSlice} from './auth/auth.slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice.reducer,
});
