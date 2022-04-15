import { GET_FILM_INFO, GET_POPULAR_FILMS } from '../actions/types';

const initialState = {
  films: {
    popular: [],
    filmInfo: [],
  },
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_FILMS:
      return { ...state, films: { ...state.films, popular: action.payload } };
    case GET_FILM_INFO:
      return { ...state, films: { ...state.films, filmInfo: action.payload } };
    default: return state;
  }
};
