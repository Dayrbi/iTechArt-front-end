import {
  GET_CINEMAS_BY_FILM, GET_CINEMAS_BY_FILTERS, GET_CINEMAS_FOR_CHECKOUT, GET_FILTER_PARAMS,
} from 'redux/actions/types';

const initialState = {
  cinemas: {
    allCinemas: [],
    filmCinemas: [],
    filterParams: [],
    checkoutCinemas: [],
  },
};

export const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMAS_BY_FILM:
      return { ...state, cinemas: { ...state.cinemas, filmCinemas: action.payload } };
    case GET_CINEMAS_BY_FILTERS:
      return { ...state, cinemas: { ...state.cinemas, allCinemas: action.payload } };
    case GET_FILTER_PARAMS:
      return { ...state, cinemas: { ...state.cinemas, filterParams: action.payload } };
    case GET_CINEMAS_FOR_CHECKOUT:
      return { ...state, cinemas: { ...state.cinemas, checkoutCinemas: action.payload } };
    default: return state;
  }
};
