import { List } from "immutable";

import {
  BOOKING_CHUYEN,
  GET_LIST_CHUYEN,
  LIST_CHUYEN_HAD_CHANGED,
  GET_LIST_CHUYEN_ERR,
  GET_LIST_CHUYEN_SUCCESS,
  BOOK_CHUYEN_ERROR,
  BOOK_CHUYEN_SUCCESS,
  GET_CHUYEN_DETAIL,
  GET_CHUYEN_DETAIL_ERROR,
  GET_CHUYEN_DETAIL_SUCCESS
} from "./action";

const initialState = {
  isLoading: false,
  chuyens: List([]),
  err: null,
  isbooking: false,
  ticket: null,
  errorpick: null,
  isLoadingChuyenDetail: false,
  chuyenDetail: null,
  errorChuyenDetail: null
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
        chuyens: action.items,
        err: null
      };
    case GET_LIST_CHUYEN_ERR:
      return {
        ...state,
        isLoading: false,
        err: action.error
      };
    case LIST_CHUYEN_HAD_CHANGED:
      state.chuyens.forEach(chuyen => {
        if (
          chuyen._id.toString() === action.chuyenHadChanged.idChuyen.toString()
        ) {
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
        err: null
      };
    case BOOK_CHUYEN_SUCCESS:
      return {
        ...state,
        isbooking: false,
        ticket: action.ticket,
        errorpick: null
      };
    case BOOK_CHUYEN_ERROR:
      return {
        ...state,
        isbooking: false,
        ticket: null,
        errorpick: action.error
      };
    case GET_CHUYEN_DETAIL:
      return {
        ...state,
        isLoadingChuyenDetail: true,
        chuyenDetail: null,
        errorChuyenDetail: null
      };
    case GET_CHUYEN_DETAIL_SUCCESS:
      return {
        isLoadingChuyenDetail: false,
        chuyenDetail: action.chuyenDetail,
        errorChuyenDetail: null
      };
    case GET_CHUYEN_DETAIL_ERROR:
      return {
        isLoadingChuyenDetail: false,
        chuyenDetail: null,
        errorChuyenDetail: action.error
      };
    default:
      return state;
  }
};
export default reducer;
