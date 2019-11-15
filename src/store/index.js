import { createStore, combineReducers, applyMiddleware } from "redux";
import carsReducer from "../store/cars/reducer";
import locationReducer from "../store/locations/reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cars: carsReducer,
  locations: locationReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
