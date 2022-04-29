import { api } from 'services/api.servises';
import {
  GET_ALL_CINEMAS,
  GET_CINEMAS_BY_FILM, GET_CINEMAS_BY_FILTERS, GET_CINEMAS_FOR_CHECKOUT, GET_FILTER_PARAMS,
} from './types';

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
export function getCinemasByFilter(theatre, city, date) {
  return async function getCinemasByFilterThunk(dispatch) {
    const responce = await api.get(
      '/cinemas/getCinemasByFilter',
      { params: { theatreParam: theatre, cityParam: city, dateParam: date } },
    );
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_CINEMAS_BY_FILTERS, payload: responce.data });
  };
}
export function getFilterParams() {
  return async function getFilterParamsThunk(dispatch) {
    const responce = await api.get('/cinemas/getFilterParams');
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_FILTER_PARAMS, payload: responce.data });
  };
}
export function getCinemasForCheckout(id) {
  return async function getCinemasForCheckoutThunk(dispatch) {
    const responce = await api.get('/sessions/getSessionInfo', { params: { _id: id } });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_CINEMAS_FOR_CHECKOUT, payload: responce.data });
  };
}
