import { combineReducers } from 'redux';
import { usersReducer } from './reducers/user';

export const rootReducers = combineReducers({
  usersReducer,
});
