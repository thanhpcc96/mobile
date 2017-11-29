import { ClientAPI } from "../../../constants/api";

const clientAPI = new ClientAPI();
export const LOAD_PAYMENT = "LOAD_PAYMENT";
export const LOAD_PAYMENT_SUCCESS = "LOAD_PAYMENT_SUCCESS";
export const LOAD_PAYMENT_ERROR = "LOAD_PAYMENT_ERROR";

export function loadHistoryPayMent() {
  return async dispatch => {
    dispatch({
      type: LOAD_PAYMENT
    });
    try {
      const data = await clientAPI.loadHistoryPayMent();
      return dispatch({
        type: LOAD_PAYMENT_SUCCESS,
        payment: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: LOAD_PAYMENT_ERROR,
        error
      });
    }
  };
}
