import { combineReducers } from 'redux';
import { usersReducer } from './reducers/user';
import { filmsReducer } from './reducers/films';

export const rootReducers = combineReducers({
  usersReducer,
  filmsReducer,
});
