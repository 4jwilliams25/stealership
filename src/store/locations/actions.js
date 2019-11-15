import axios from "axios";
import {
  GET_LOCATIONS_PENDING,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_FAILED
} from "./constants";

export const getLocations = () => dispatch => {
  dispatch({
    type: GET_LOCATIONS_PENDING
  });
  axios
    .get("http://localhost:8082/api/stealership/locations")
    .then(res => {
      dispatch({
        type: GET_LOCATIONS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_LOCATIONS_FAILED,
        payload: err
      });
    });
};
