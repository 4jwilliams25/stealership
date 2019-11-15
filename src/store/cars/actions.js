import axios from "axios";
import {
  GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  GET_CARS_FAILED,
  ADD_CAR_PENDING,
  ADD_CAR_SUCCESS,
  ADD_CAR_FAILED,
  REMOVE_CAR_PENDING,
  REMOVE_CAR_SUCCESS,
  REMOVE_CAR_FAILED,
  UPDATE_CAR_PENDING,
  UPDATE_CAR_SUCCESS,
  UPDATE_CAR_FAILED
} from "./constants";

export const getCars = () => dispatch => {
  dispatch({
    type: GET_CARS_PENDING
  });
  axios
    .get("http://localhost:8082/api/stealership/cars")
    .then(res => {
      dispatch({
        type: GET_CARS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CARS_FAILED,
        payload: err
      });
    });
};

export const addCar = newCar => dispatch => {
  dispatch({
    type: ADD_CAR_PENDING
  });
  axios
    .post("http://localhost:8082/api/stealership/cars", newCar)
    .then(res => {
      dispatch({
        type: ADD_CAR_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_CAR_FAILED,
        payload: err
      });
    });
};

export const removeCar = id => dispatch => {
  dispatch({
    type: REMOVE_CAR_PENDING
  });
  axios
    .delete(`http://localhost:8082/api/stealership/cars/${id}`)
    .then(res => {
      dispatch({
        type: REMOVE_CAR_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: REMOVE_CAR_FAILED,
        payload: err
      });
    });
};

export const updateCar = (id, updatedCar) => dispatch => {
  dispatch({
    type: UPDATE_CAR_PENDING
  });
  axios
    .patch(`http://localhost:8082/api/stealership/cars/${id}`, updatedCar)
    .then(res => {
      dispatch({
        type: UPDATE_CAR_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_CAR_FAILED,
        payload: err
      });
    });
};
