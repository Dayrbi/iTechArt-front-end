import { api } from 'services/api.servises';
import { GET_FILM_INFO, GET_POPULAR_FILMS } from './types';

export function getPopularFilms() {
  return async function getPopularFilmsThunk(dispatch) {
    const responce = await api.get('/movies/getAllFilms');
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_POPULAR_FILMS, payload: responce.data });
  };
}
export function getFilmInfo(id) {
  return async function getFilmInfoThunk(dispatch) {
    const responce = await api.get('/movies/getFilm', { params: { id } });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_FILM_INFO, payload: responce.data });
  };
}
