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

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_PENDING:
      return state;
    case GET_CARS_SUCCESS:
      return action.payload;
    case GET_CARS_FAILED:
      return action.payload;
    case ADD_CAR_PENDING:
      return state;
    case ADD_CAR_SUCCESS:
      return [action.payload, ...state];
    case ADD_CAR_FAILED:
      return action.payload;
    case REMOVE_CAR_PENDING:
      return state;
    case REMOVE_CAR_SUCCESS:
      return [...state.filter(car => car.id !== action.payload.id)];
    case REMOVE_CAR_FAILED:
      return action.payload;
    case UPDATE_CAR_PENDING:
      return state;
    case UPDATE_CAR_SUCCESS:
      return state.map(car =>
        car.id === action.payload.id ? action.payload : car
      );
    case UPDATE_CAR_FAILED:
      return action.payload;
    default:
      return state;
  }
};
