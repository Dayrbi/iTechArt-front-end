import { combineReducers } from 'redux';
import { usersReducer } from './reducers/user';

const rootReducers = combineReducers({
  usersReducer,
});
export default rootReducers;
