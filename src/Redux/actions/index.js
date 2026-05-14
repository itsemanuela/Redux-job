export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const SET_JOBS = "SET_JOBS";
export const SET_JOBS_LOADING = "SET_JOBS_LOADING";
export const SET_JOBS_ERROR = "SET_JOBS_ERROR";

export const addToFavoriteAction = (jobData) => ({
  type: ADD_TO_FAVORITES,
  payload: jobData,
});

export const removeFavoritesAction = (id) => ({
  type: REMOVE_FAVORITES,
  payload: id,
});

export const getJobsAction = (query) => {
  return (dispatch) => {
    dispatch({ type: SET_JOBS_LOADING, payload: true });

    dispatch({ type: SET_JOBS_ERROR, payload: false });

    fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
        query +
        "&limit=20",
    )
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Errore nel caricamento dei dati");
      })
      .then((results) => {
        dispatch({ type: SET_JOBS, payload: results.data });
      })
      .catch((error) => {
        console.error(error);

        dispatch({ type: SET_JOBS_ERROR, payload: true });
      });
  };
};
