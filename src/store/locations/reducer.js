import {
  GET_LOCATIONS_PENDING,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_FAILED
} from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS_PENDING:
      return state;
    case GET_LOCATIONS_SUCCESS:
      return action.payload;
    case GET_LOCATIONS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
