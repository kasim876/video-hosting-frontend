import {combineReducers} from 'redux';

import authSlice from './auth/auth.slice';

const rootReducer = combineReducers({auth: authSlice.reducer});

export default rootReducer;
