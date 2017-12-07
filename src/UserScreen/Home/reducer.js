import {
  GET_INFO_CLIENT,
  GET_INFO_CLIENT_ERROR,
  GET_INFO_CLIENT_SUCCESS,
  POST_NAP_TIEN,
  POST_NAP_TIEN_ERROR,
  POST_NAP_TIEN_SUCCESS
} from "./action";

const initState = {
  isLoaded: false,
  clientinfo: null,
  error: null,
  isNapTien: false,
  naptieninfo: null,
  errorNap: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_INFO_CLIENT:
      return {
        ...state,
        isLoaded: false,
        clientinfo: null,
        error: null
      };
    case GET_INFO_CLIENT_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        clientinfo: action.clientinfo,
        error: null
      };
    case GET_INFO_CLIENT_ERROR:
      return {
        ...state,
        isLoaded: true,
        clientinfo: null,
        error: action.error
      };
    case  POST_NAP_TIEN: 
      return {
          ...state,
          isNapTien: false,
          naptieninfo: null,
          errorNap: null
      }
    case  POST_NAP_TIEN_SUCCESS: 
      return {
          ...state,
          isNapTien: true,
          naptieninfo: action.naptieninfo,
          errorNap: null
      }
    case  POST_NAP_TIEN: 
      return {
          ...state,
          isNapTien: false,
          naptieninfo: null,
          errorNap: action.error
      }
    default:
      return state;
  }
}
