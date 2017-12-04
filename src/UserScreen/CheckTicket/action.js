import { UserAPI } from "../../../constants/api";

const userAPI = new UserAPI();

export const GET_INFO_VE = "GET_INFO_VE";
export const GET_INFO_VE_SUCCESS = "GET_INFO_VE_SUCCESS";
export const GET_INFO_VE_ERROR = "GET_INFO_VE_ERROR";

export const POST_XE_VE = "POST_XE_VE";
export const POST_XE_VE_SUCCESS = "POST_XE_VE_SUCCESS";
export const POST_XE_VE_ERROR = "POST_XE_VE_ERROR";

export function getInfoVe(id) {
  return async dispatch => {
    dispatch({ type: GET_INFO_VE });
    try {
      const data = await userAPI.getInfoVe(id);
      return dispatch({
        type: GET_INFO_VE_SUCCESS,
        veinfo: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_INFO_VE_ERROR,
        error
      });
    }
  };
}
export function xeVe(id) {
  return async dispatch => {
    dispatch({ type: POST_XE_VE });
    try {
      const data = await userAPI.postXeVe(id);
      return dispatch({
        type: POST_XE_VE_SUCCESS,
        vedaxe: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: POST_XE_VE_ERROR,
        error
      });
    }
  };
}
