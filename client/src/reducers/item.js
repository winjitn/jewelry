import { STORE_ITEM, DELETE_ITEM, CLEAR_ITEM } from "../actions/types";
import { PURGE } from "redux-persist";

export default function(state = [], action) {
  switch (action.type) {
    case STORE_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      const newState = [...state];
      newState.splice(
        state.findIndex(entry => entry === action.payload),
        1
      );
      return newState;
    case CLEAR_ITEM:
      return [];
    case PURGE:
      return [];
    default:
      return state;
  }
}
