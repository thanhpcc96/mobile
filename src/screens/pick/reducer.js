import { List } from "immutable";

import {
  BOOKING_CHUYEN,
  GET_LIST_CHUYEN,
  LIST_CHUYEN_HAD_CHANGED,
  GET_LIST_CHUYEN_ERR,
  GET_LIST_CHUYEN_SUCCESS
} from "./action";

const initialState = {
  isLoading: false,
  chuyens: List([]),
  err: null,
  isbooking: false
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
        chuyens: action.items.result,
        err: null
      };
    case GET_LIST_CHUYEN_ERR:
      return {
        ...state,
        isLoading: false,
        err: action.error,

      };
    case LIST_CHUYEN_HAD_CHANGED:
      state.chuyens.forEach( chuyen => {
        if (chuyen._id.toString() === action.chuyenHadChanged.idChuyen.toString()) {
          chuyen.chongoi = action.chuyenHadChanged.dadat;
        }
      });
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case BOOKING_CHUYEN:
      return {
        ...state,
        isbooking: true,
        err: null,
      }
    default:
      return state;
  }
};
export default reducer;
