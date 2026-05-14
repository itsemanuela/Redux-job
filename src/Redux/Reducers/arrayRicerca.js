import { SET_JOBS, SET_JOBS_LOADING, SET_JOBS_ERROR } from "../actions";

const initialState = {
  results: [],
  isLoading: false,
  isError: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_JOBS_ERROR:
      return { ...state, isError: action.payload, isLoading: false };
    case SET_JOBS:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default jobsReducer;
