import { CREATE_USER, LOGIN_USER } from './types';

export const registerUser = (token) => ({
  type: CREATE_USER,
  payload: token,
});
export const loginUser = (token) => ({
  type: LOGIN_USER,
  payload: token,
});
