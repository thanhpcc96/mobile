/*eslint-disable */
import { ClientAPI, UserAPI, setAuthHeader } from "../../../constants/api";

const userAPI = new UserAPI();
const clientAPI = new ClientAPI();

export const POST_LOGIN_USER = "POST_LOGIN_USER";
export const POST_LOGIN_USER_SUCCESS = "POST_LOGIN_USER_SUCCESS";
export const POST_LOGIN_USER_ERROR = "POST_LOGIN_USER_ERROR";
/* Client Type */
export const POST_LOGIN_CLIENT = "POST_LOGIN_CLIENT";
export const POST_LOGIN_CLIENT_SUCCESS = "POST_LOGIN_CLIENT_SUCCESS";
export const POST_LOGIN_CLIENT_ERROR = "POST_LOGIN_CLIENT_ERROR";

export const POST_REGISTER_CLIENT = "POST_REGISTER_CLIENT";
export const POST_REGISTER_CLIENT_SUCCESS = "POST_REGISTER_CLIENT_SUCCESS";
export const POST_REGISTER_CLIENT_ERROR = "POST_REGISTER_CLIENT_ERROR";

export const LOGGED_OUT = "LOGGED_OUT";

function loginSuccess(typeUser, data) {
  const typeAction =
    typeUser === "client" ? POST_LOGIN_CLIENT_SUCCESS : POST_LOGIN_USER_SUCCESS;

  setAuthHeader(data.data.token);
  return {
    type: typeAction,
    user: data.data,
    token: data.data.token
  };
}
function loginError(typeUser, error) {
  const typeAction =
    typeUser === "client" ? POST_LOGIN_CLIENT_ERROR : POST_LOGIN_USER_ERROR;
  return {
    type: typeAction,
    error
  };
}

/**
 * 
 * @param {String} email 
 * @param {String} password 
 * @param {String} typeUser 
 */
export function postLogin(email, password, typeUser) {
  if (typeUser === "client") {
    return async dispatch => {
      dispatch({ type: POST_LOGIN_CLIENT });
      try {
        const data = await clientAPI.postLogin({ email, password });
        return dispatch(loginSuccess(typeUser, data));
      } catch (err) {
        return dispatch(loginError(typeUser, err));
      }
    };
  }
  return async dispatch => {
    dispatch({ type: POST_LOGIN_USER });
    try {
      const data = await userAPI.postLogin({ email, password });
      return dispatch(loginSuccess(typeUser, data));
    } catch (err) {
      return dispatch(loginError(typeUser, err));
    }
  };
}
/**
 * 
 * @param {*} fullname 
 * @param {*} email 
 * @param {*} phone 
 * @param {*} password 
 */
export function postRegisterAction(fullname, email, phone, password) {
  return async dispatch => {
    dispatch({ type: POST_REGISTER_CLIENT });
    try {
      const data = await clientAPI.postRegister({
        fullname,
        email,
        phone,
        password
      });
      return dispatch(registerSuccess(data));
    } catch (err) {
      return dispatch({ type: POST_REGISTER_CLIENT_ERROR, error: err });
    }
  };
}
export function logOutAction() {
  setAuthHeader();
  return dispatch => dispatch({ type: LOGGED_OUT });
}
function registerSuccess(data) {
  setAuthHeader(data.data.token);
  return {
    type: POST_REGISTER_CLIENT_SUCCESS,
    user: data.data,
    token: data.data.token
  };
}
