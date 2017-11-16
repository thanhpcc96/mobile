import { List } from "immutable";

import {
  BOOKING_CHUYEN,
  GET_LIST_CHUYEN,
  CHUYEN_XE_UPDATE,
  GET_LIST_CHUYEN_ERR,
  GET_LIST_CHUYEN_SUCCESS
} from "./action";

const initialState = {
  isLoading: false,
  chuyens: List([]),
  err: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CHUYEN:
      return {
        ...state,
        isLoading: true
      };
    case GET_LIST_CHUYEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chuyens: action.res.result
      };
    case GET_LIST_CHUYEN_ERR:
      return {
        ...state,
        isLoading: false
      };
    case CHUYEN_XE_UPDATE:
      state.chuyens.forEach(chuyen => {
        if (chuyen._id === action._id) {
          chuyen.chongoi = action.chongoi;
        }
      });
      return {
        ...state
      };
    default:
      return state;
  }
};
export default reducer;
