import { ADD_TO_FAVORITES, REMOVE_FAVORITES } from "../actions";

const initialState = {
  favorites: {
    list: [],
  },
};

const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: [...state.favorites.list, action.payload],
        },
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,

          list: state.favorites.list.filter(
            (azienda) => azienda._id !== action.payload,
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducers;
