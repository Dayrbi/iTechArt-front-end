import { api } from 'services/api.servises';
import { GET_FILMS_FOR_SEARCH, GET_FILM_INFO, GET_POPULAR_FILMS } from './types';

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
export function getFilmsForSearch(filmName) {
  return async function getFilmsForSearchThunk(dispatch) {
    const responce = await api.get('/movies/getFilmsBySearch', { params: { filmName } });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_FILMS_FOR_SEARCH, payload: responce.data });
  };
}
