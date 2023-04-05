import {combineReducers} from 'redux';

import {api} from './api/api';
import authSlice from './auth/auth.slice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice.reducer,
});

export default rootReducer;
