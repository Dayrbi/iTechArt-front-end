import { api } from 'services/api.servises';
import { GET_POPULAR_FILMS } from './types';

export function getPopularFilms() {
  return async function getPopularFilmsThunk(dispatch) {
    const responce = await api.get('/movies/getAllFilms');
    if (!responce.data) {
      throw new Error();
    }
    await dispatch({ type: GET_POPULAR_FILMS, payload: responce.data });
  };
}
