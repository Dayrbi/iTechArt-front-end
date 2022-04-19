import { GET_ALL_CINEMAS, GET_CINEMAS_BY_FILM, GET_CINEMAS_BY_FILTERS } from 'redux/actions/types';

const initialState = {
  cinemas: {
    allCinemas: [],
    filmCinemas: [],
  },
};

export const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CINEMAS:
      return { ...state, cinemas: { ...state.cinemas, allCinemas: action.payload } };
    case GET_CINEMAS_BY_FILM:
      return { ...state, cinemas: { ...state.cinemas, filmCinemas: action.payload } };
    case GET_CINEMAS_BY_FILTERS:
      return { ...state, cinemas: { ...state.cinemas, allCinemas: action.payload } };
    default: return state;
  }
};
