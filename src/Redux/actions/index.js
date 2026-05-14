export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const SET_JOBS = "SET_JOBS";

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

export const setJobAction = (data) => {
  return {
    type: SET_JOBS,
    payload: data,
  };
};

export const getJobsAction = (query) => {
  return (dispatch, getState) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    fetch(baseEndpoint + query + "&limit=20")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel recupero dei lavori");
        }
      })
      .then((results) => {
        console.log("QUESTO È GETSTATE", getState());
        dispatch({
          type: SET_JOBS,
          payload: results.data,
        });
      })
      .catch((error) => {
        console.log("Errore:", error);
      });
  };
};
