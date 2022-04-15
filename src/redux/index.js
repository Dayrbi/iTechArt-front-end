import { combineReducers } from 'redux';
import { usersReducer } from './reducers/user';
import { filmsReducer } from './reducers/films';
import { cinemasReducer } from './reducers/cinemas';

export const rootReducers = combineReducers({
  usersReducer,
  filmsReducer,
  cinemasReducer,
});
