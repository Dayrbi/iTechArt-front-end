import {
  GET_FILM_INFO, GET_POPULAR_FILMS, GET_FILMS_FOR_SEARCH, GET_FILMS_FOR_CHECKOUT,
} from '../actions/types';

const initialState = {
  films: {
    popular: [],
    filmInfo: [],
    filmSearch: [],
    filmCheckout: [],
  },
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_FILMS:
      return { ...state, films: { ...state.films, popular: action.payload } };
    case GET_FILM_INFO:
      return { ...state, films: { ...state.films, filmInfo: action.payload } };
    case GET_FILMS_FOR_SEARCH:
      return { ...state, films: { ...state.films, filmSearch: action.payload } };
    case GET_FILMS_FOR_CHECKOUT:
      return { ...state, films: { ...state.films, filmCheckout: action.payload } };
    default: return state;
  }
};
