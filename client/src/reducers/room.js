import { FETCH_ROOM } from "../actions/types";
import { PURGE } from "redux-persist";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ROOM:
      return action.payload;
    case PURGE:
      return {};
    default:
      return state;
  }
}
