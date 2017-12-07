import { UserAPI } from "../../../constants/api";

const userAPI = new UserAPI();

export const GET_INFO_CLIENT = "GET_INFO_CLIENT";
export const GET_INFO_CLIENT_SUCCESS = "GET_INFO_CLIENT_SUCCESS";
export const GET_INFO_CLIENT_ERROR = "GET_INFO_CLIENT_ERROR";

export const POST_NAP_TIEN = "POST_NAP_TIEN";
export const POST_NAP_TIEN_ERROR = "POST_NAP_TIEN_ERROR";
export const POST_NAP_TIEN_SUCCESS = "POST_NAP_TIEN_SUCCESS";

export function getInfo(email) {
  return async dispatch => {
    dispatch({
      type: GET_INFO_CLIENT
    });
    try {
      const res = await userAPI.postToGetInfoClient(email);
      return dispatch({
        type: GET_INFO_CLIENT_SUCCESS,
        clientinfo: res.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_INFO_CLIENT_ERROR,
        error
      });
    }
  };
}
export function postNaptien(params) {
  return async dispatch => {
    dispatch({
      type: POST_NAP_TIEN
    });
    try {
      const data = await userAPI.postNaptien(params);
      return dispatch({
        type: POST_NAP_TIEN_SUCCESS,
        naptieninfo: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: POST_NAP_TIEN_ERROR,
        error
      });
    }
  };
}
