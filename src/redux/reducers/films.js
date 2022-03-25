import { GET_POPULAR_FILMS } from '../actions/types';

const initialState = {
  films: {
    popular: [],
  },
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_FILMS:
      return { ...state, films: { ...state.films, popular: action.payload } };
    default: return state;
  }
};
