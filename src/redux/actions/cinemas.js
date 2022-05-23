import { api } from 'services/api.servises';
import {
  GET_CINEMAS_BY_FILM, GET_CINEMAS_BY_FILTERS, GET_CINEMAS_FOR_CHECKOUT, GET_FILTER_PARAMS, UDPATE_CHECKOUT_CINEMA,
} from './types';

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
export function getCinemasForCheckout(id, time) {
  return async function getCinemasForCheckoutThunk(dispatch) {
    const responce = await api.get('/sessions/getSessionInfo', { params: { _id: id, time } });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_CINEMAS_FOR_CHECKOUT, payload: responce.data });
  };
}
export function updateCinemaHall(sessionId, cinemaHall, time) {
  return async function updateCinemaHallThunk(dispatch) {
    const responce = await api.put('/sessions/updateCinemaHall', { sessionId, cinemaHall, time });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: UDPATE_CHECKOUT_CINEMA, payload: responce.data });
  };
}
