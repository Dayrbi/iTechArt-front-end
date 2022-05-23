import { ORDER_CREATE_SUCCESS, ORDER_CREATING } from 'redux/actions/types';

const initialState = {
  orders: [],
  isLoading: false,
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CREATING:
      return { ...state, isLoading: true };
    case ORDER_CREATE_SUCCESS:
      return { ...state, isLoading: false };
    default: return state;
  }
};
