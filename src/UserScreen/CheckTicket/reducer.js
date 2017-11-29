import { GET_INFO_VE, GET_INFO_VE_ERROR, GET_INFO_VE_SUCCESS } from "./action";

const initState = {
  isLoaded: false,
  ticketinfo: null,
  error: null
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

    default:
      return state;
  }
}
