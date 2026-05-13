const initialState = {
  favorites: {
    list: [],
  },
};

const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      return {
        ...state,
        favorites: {
          ...state.favorites,
          list: [...state.favorites.list, action.payload],
        },
      };
    }
  }
};

export default mainReducers;
