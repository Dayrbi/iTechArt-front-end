import Cookies from 'js-cookie';
import api from '../../services/api.servises';
import { CREATE_USER, LOGIN_USER } from './types';

export function registerUser(username, email, password) {
  return async function registerUserThunk(dispatch) {
    const responce = await api.post('/register', { username, email, password });
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
    const responce = await api.post('/login', { email, password });
    if (!responce.data) {
      throw new Error();
    }
    const { token } = responce.data;
    Cookies.set('token', token);
    dispatch({ type: LOGIN_USER, payload: token });
  };
}
