import { combineReducers } from "redux";

import authReducer from "./auth";
import roomReducer from "./room";
import itemReducer from "./item";

export default combineReducers({
  auth: authReducer,
  img: roomReducer,
  item: itemReducer
});
