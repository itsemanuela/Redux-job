import { ADD_TO_FAVORITES, REMOVE_FAVORITES } from "../actions";

const initialState = {
  list: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        list: state.list.filter((azienda) => azienda._id !== action.payload),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
