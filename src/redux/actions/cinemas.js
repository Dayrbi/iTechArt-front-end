import { api } from 'services/api.servises';
import { GET_ALL_CINEMAS, GET_CINEMAS_BY_FILM, GET_CINEMAS_BY_FILTERS } from './types';

export function getAllCinemas() {
  return async function getAllCinemasThunk(dispatch) {
    const responce = await api.get('/cinemas/getAllCinemas');
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_ALL_CINEMAS, payload: responce.data });
  };
}
export function getCinemasByFilm(id) {
  return async function getCinemasByFilmThunk(dispatch) {
    const responce = await api.get('/sessions/getFilmSessions', { params: { id } });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_CINEMAS_BY_FILM, payload: responce.data });
  };
}
export function getCinemasByFilter(options) {
  return async function getCinemasByFilterThunk(dispatch) {
    const { theatre, city, date } = options;
    const responce = await api.get('/cinemas/getCinemasByFilter', { params: { theatre, city, date } });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_CINEMAS_BY_FILTERS, payload: responce.data });
  };
}