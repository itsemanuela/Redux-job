export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

//ACTION CREATORS funzione che restituisce un'action'.

export const addToFavoriteAction = (jobData) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: jobData,
  };
};

export const removeFavoritesAction = (id) => {
  return {
    type: REMOVE_FAVORITES,
    payload: id,
  };
};
