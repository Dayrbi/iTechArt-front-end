import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './redux';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store = createStore(rootReducers, composedEnhancer);
