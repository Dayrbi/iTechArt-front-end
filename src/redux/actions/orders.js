import { api } from 'services/api.servises';
import { GET_ONE_ORDER, ORDER_CREATE_SUCCESS, ORDER_CREATING } from './types';

export function createOrder(placeArr, foodArr, filmId, amount, time, date, cinemaName, city, orderFilmImg, filmTitle, userId) {
  return async function createOrderThunk(dispatch) {
    dispatch({ type: ORDER_CREATING });
    const responce = await api.post('/orders/createOrder', {
      placeArr, foodArr, filmId, amount, time, date, cinemaName, city, orderFilmImg, filmTitle, userId,
    });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: ORDER_CREATE_SUCCESS });
  };
}
export function getOneOrder(id, filmId) {
  return async function getOrderInfoThunk(dispatch) {
    const responce = await api.get('/orders/getOneOrder', { params: { id, filmId } });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: GET_ONE_ORDER, payload: responce.data });
  };
}
