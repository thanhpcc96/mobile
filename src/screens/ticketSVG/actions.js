import { ClientAPI } from "../../../constants/api";

export const GET_LIST_TICKET_AVAIABLE = "GET_LIST_TICKET_AVAIABLE";
export const GET_LIST_TICKET_AVAIABLE_SUCCESS =
  "GET_LIST_TICKET_AVAIABLE_SUCCESS";
export const GET_LIST_TICKET_AVAIABLE_ERROR = "GET_LIST_TICKET_AVAIABLE_ERROR";

export const GET_TICKET_INFO = "GET_TICKET_INFO";
export const GET_TICKET_INFO_SUCCESS = "GET_TICKET_INFO_SUCCESS";
export const GET_TICKET_INFO_ERROR = "GET_TICKET_INFO_ERROR";

const clientAPI = new ClientAPI();

export function getListVeAvaiable() {
  return async dispatch => {
    dispatch({
      type: GET_LIST_TICKET_AVAIABLE
    });
    try {
      const data = await clientAPI.getTicketAvaible();
      return dispatch({
        type: GET_LIST_TICKET_AVAIABLE_SUCCESS,
        tickets: data.data
      });
    } catch (err) {
      return dispatch({
        type: GET_LIST_TICKET_AVAIABLE_ERROR,
        error: err
      });
    }
  };
}
export function getTicketInfo(idve) {
  return async dispatch => {
    dispatch({
      type: GET_TICKET_INFO
    });
    try {
      const data = await clientAPI.getTicketInfo(idve);
      return dispatch({
        type: GET_TICKET_INFO_SUCCESS,
        ticketinfo: data.data.result
      });
    } catch (err) {
      return dispatch({
        type: GET_TICKET_INFO_ERROR,
        error: err
      });
    }
  };
}
