import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:8080/api';
const api = axios.create({
  baseURL: API_URL,
});
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get('userToken')}`;
  return config;
});
export default api;
