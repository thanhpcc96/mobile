import {
  GET_INFO_VE,
  GET_INFO_VE_ERROR,
  GET_INFO_VE_SUCCESS,
  POST_XE_VE,
  POST_XE_VE_SUCCESS,
  POST_XE_VE_ERROR
} from "./action";

const initState = {
  isLoaded: false,
  ticketinfo: null,
  error: null,
  isChecked: false,
  vedaxe: null,
  errorCheck: null
};
export default function(state = initState, action) {
  switch (action.type) {
    case GET_INFO_VE:
      return {
        ...state,
        ticketinfo: null,
        error: null,
        isLoaded: false
      };
    case GET_INFO_VE_SUCCESS:
      return {
        ...state,
        ticketinfo: action.veinfo,
        error: null,
        isLoaded: true
      };
    case GET_INFO_VE_ERROR:
      return {
        ...state,
        ticketinfo: null,
        error: action.error,
        isLoaded: true
      };
    case POST_XE_VE:
      return {
        ...state,
        errorCheck: null,
        isChecked: false,
        vedaxe: null
      };
    case POST_XE_VE_SUCCESS:
      return {
        ...state,
        errorCheck: null,
        isChecked: true,
        vedaxe: action.vedaxe
      };
    case POST_XE_VE_ERROR:
      return {
        ...state,
        errorCheck: action.error,
        isChecked: true,
        vedaxe: null
      };
    default:
      return state;
  }
}
