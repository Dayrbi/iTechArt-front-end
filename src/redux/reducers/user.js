import {
  AUTH_USER, CREATE_USER, GET_USER_ORDERS, LOGIN_USER,
} from '../actions/types';

const initialState = {
  users: {
    token: null,
    id: null,
    username: null,
  },
  orders: {
    allOrders: [],
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: { ...state.users, token: action.payload } };
    case LOGIN_USER:
      return { ...state, users: { ...state.users, token: action.payload } };
    case AUTH_USER:
      return { ...state, users: { ...state.users, id: action.payload.userId, username: action.payload.username } };
    case GET_USER_ORDERS:
      return { ...state, orders: { ...state.orders, allOrders: action.payload } };
    default: return state;
  }
};
