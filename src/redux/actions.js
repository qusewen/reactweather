import axios from "axios";

export const actionTypes = {
  SET_MOVIES: "SET_MOVIES",
  SET_MOVIES_SUCCESS: "SET_MOVIES_SUCCESS",
  SET_MOVIES_ERROR: "SET_MOVIES_ERROR",
};

export const getMovie = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.SET_MOVIES });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${test}&APPID=ce616969cd740fccc2086080fbc71d41&units=metric`
      )
      .then((res) => {
        dispatch({
          type: actionTypes.SET_MOVIES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: actionTypes.SET_MOVIES_ERROR, payload: err.response });
      });
  };
};