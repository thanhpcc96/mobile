import {
  CLIENT_GET_INFO,
  CLIENT_GET_INFO_ERROR,
  CLIENT_GET_INFO_SUCCESS,
  USER_GET_INFO,
  USER_GET_INFO_ERROR,
  USER_GET_INFO_SUCCESS
} from "./action";

const INITSTATE = {
  isLoading: false,
  info: {},
  typeUser: null,
  error: null
};

export default function(state = INITSTATE, action) {
  switch (action.type) {
    case CLIENT_GET_INFO:
      return {
        ...state,
        isLoading: true
      };
    case CLIENT_GET_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        info: action.data,
        typeUser: "client"
      };
    case CLIENT_GET_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        info: null,
        err: action.error
      };
    case USER_GET_INFO:
      return {
        ...state,
        isLoading: true
      };
    case USER_GET_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        info: action.data,
        typeUser: "user"
      };
    case USER_GET_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        info: null,
        err: action.error
      };
    default:
      return state;
  }
}
