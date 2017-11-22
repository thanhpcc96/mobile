import { ClientAPI } from "../../../constants/api";

export const GET_LIST_TICKET_AVAIABLE = "GET_LIST_TICKET_AVAIABLE";
export const GET_LIST_TICKET_AVAIABLE_SUCCESS =
  "GET_LIST_TICKET_AVAIABLE_SUCCESS";
export const GET_LIST_TICKET_AVAIABLE_ERROR = "GET_LIST_TICKET_AVAIABLE_ERROR";

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
        tickets: data.data,
      });
    } catch (err) {
      return dispatch({
        type: GET_LIST_TICKET_AVAIABLE_ERROR,
        error: err,
      });
    }
  };
}
