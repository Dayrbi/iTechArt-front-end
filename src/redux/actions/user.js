import Cookies from 'js-cookie';
import { api } from 'services/api.servises';
import { AUTH_USER, CREATE_USER, LOGIN_USER } from './types';

export function registerUser(username, email, password) {
  return async function registerUserThunk(dispatch) {
    const responce = await api.post('/auth/register', { username, email, password });
    if (!responce.data) {
      throw new Error();
    }
    const { token } = responce.data;
    Cookies.set('token', token);
    dispatch({ type: CREATE_USER, payload: token });
  };
}
export function loginUser(email, password) {
  return async function loginUserThunk(dispatch) {
    const responce = await api.post('/auth/login', { email, password });
    if (!responce.data) {
      throw new Error();
    }
    const { token } = responce.data;
    Cookies.set('token', token);
    dispatch({ type: LOGIN_USER, payload: token });
  };
}
export function authUser() {
  return async function authUserThunk(dispatch) {
    const responce = await api.get('/auth/login');
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: AUTH_USER, payload: responce.data });
  };
}
