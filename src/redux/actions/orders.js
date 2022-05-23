import { api } from 'services/api.servises';
import { ORDER_CREATE_SUCCESS, ORDER_CREATING } from './types';

export function createOrder(placeArr, foodArr, filmId, amount, time, date, cinemaName, city, imgSrc, filmTitle, userId) {
  return async function createOrderThunk(dispatch) {
    dispatch({ type: ORDER_CREATING });
    const responce = await api.post('/orders/createOrder', {
      placeArr, foodArr, filmId, amount, time, date, cinemaName, city, imgSrc, filmTitle, userId,
    });
    if (!responce.data) {
      throw new Error();
    }
    dispatch({ type: ORDER_CREATE_SUCCESS });
  };
}
