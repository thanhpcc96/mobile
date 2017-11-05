import { ClientAPI, UserAPI } from "../../../constants/api";

const clientAPI = new ClientAPI();
const userAPI = new UserAPI();

export const CLIENT_GET_INFO = "CLIENT_GET_INFO";
export const CLIENT_GET_INFO_SUCCESS = "CLIENT_GET_INFO_SUCCESS";
export const CLIENT_GET_INFO_ERROR = "CLIENT_GET_INFO_ERROR";

export const USER_GET_INFO = "USER_GET_INFO";
export const USER_GET_INFO_SUCCESS = "USER_GET_INFO_SUCCESS";
export const USER_GET_INFO_ERROR = "USER_GET_INFO_ERROR";

function getSuccess(data, typeUser) {
  const type =
    typeUser === "client" ? CLIENT_GET_INFO_SUCCESS : USER_GET_INFO_SUCCESS;
  return {
    type,
    data: data.data
  };
}

function getError(error, typeUser) {
  const type =
    typeUser === "client" ? CLIENT_GET_INFO_ERROR : USER_GET_INFO_ERROR;
  return {
    type,
    error
  };
}

export function getInfoProfileAction(typeUser) {
  if (typeUser === "client") {
    return async dispatch => {
      dispatch({ type: CLIENT_GET_INFO });
      try {
        const data = await clientAPI.getInfoProfile();
        return dispatch(getSuccess(data, typeUser));
      } catch (err) {
        return dispatch(getError(err, typeUser));
      }
    };
  }
  return async dispatch => {
    dispatch({ type: USER_GET_INFO });
    try {
      const data = await userAPI.getProfile();
      return dispatch(getSuccess(data, "user"));
    } catch (err) {
      return dispatch(getError(err, "user"));
    }
  };
}
