import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '../constants/constants';

const url = API_URL;
const api = axios.create({
  baseURL: url,
});
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get('userToken')}`;
  return config;
});
export default api;
