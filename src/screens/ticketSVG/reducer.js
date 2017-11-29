import {
  GET_LIST_TICKET_AVAIABLE,
  GET_LIST_TICKET_AVAIABLE_ERROR,
  GET_LIST_TICKET_AVAIABLE_SUCCESS,
  GET_TICKET_INFO,
  GET_TICKET_INFO_SUCCESS,
  GET_TICKET_INFO_ERROR
} from "./actions";

const initState = {
  isLoading: false,
  listticket: null,
  error: null,
  isLoadedVe: false,
  ticketinfo: null,
  errorticket: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_LIST_TICKET_AVAIABLE:
      return {
        ...state,
        isLoading: true,
        listticket: null,
        error: null
      };
    case GET_LIST_TICKET_AVAIABLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listticket: action.tickets,
        error: null
      };
    case GET_LIST_TICKET_AVAIABLE_ERROR:
      return {
        ...state,
        isLoading: false,
        listticket: null,
        error: action.error
      };
    case GET_TICKET_INFO:
      return {
        ...state,
        isLoadedVe: false,
        ticketinfo: null,
        errorticket: null
      };
    case GET_TICKET_INFO_SUCCESS:
      return {
        ...state,
        isLoadedVe: true,
        ticketinfo: action.ticketinfo,
        errorticket: null
      };
    case GET_TICKET_INFO_ERROR:
      return {
        ...state,
        isLoadedVe: true,
        ticketinfo: null,
        errorticket: action.error
      };

    default:
      return state;
  }
}
