import { GET_ONE_ORDER, ORDER_CREATE_SUCCESS, ORDER_CREATING } from 'redux/actions/types';

const initialState = {
  order: [],
  isLoading: false,
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CREATING:
      return { ...state, isLoading: true };
    case ORDER_CREATE_SUCCESS:
      return { ...state, isLoading: false };
    case GET_ONE_ORDER:
      return { ...state, order: action.payload };
    default: return state;
  }
};
