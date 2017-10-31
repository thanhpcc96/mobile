import { ClientAPI, UserAPI } from '../../../constants/api';

const userAPI = new UserAPI();
const clientAPI = new ClientAPI();

export const POST_LOGIN_USER = 'POST_LOGIN_USER';
export const POST_LOGIN_USER_SUCCESS = 'POST_LOGIN_USER_SUCCESS';
export const POST_LOGIN_USER_ERROR = 'POST_LOGIN_USER_ERROR';
export const POST_LOGIN_CLIENT = 'POST_LOGIN_CLIENT';
export const POST_LOGIN_CLIENT_SUCCESS = 'POST_LOGIN_CLIENT_SUCCESS';
export const POST_LOGIN_CLIENT_ERROR = 'POST_LOGIN_CLIENT_ERROR';

export const postLoginClient = args => async dispatch => {
  dispatch({ type: POST_LOGIN_CLIENT });
  try {
    const res = await clientAPI.postLogin(args);
    return dispatch({ type: POST_LOGIN_CLIENT_SUCCESS });
  } catch (e) {
    return dispatch({ type: POST_LOGIN_CLIENT_ERROR });
  }
};

function loginSuccess(typeUser, data) {
  const typeAction =
    typeUser === 'client' ? POST_LOGIN_CLIENT_SUCCESS : POST_LOGIN_USER_SUCCESS;
  return {
    type: typeAction,
    user: data.user,
    token: data.token,
  };
}
function loginError(typeUser, error) {
  const typeAction =
    typeUser === 'client' ? POST_LOGIN_CLIENT_ERROR : POST_LOGIN_USER_ERROR;
  return {
    type: typeAction,
    error,
  };
}

export function postLogin(email, password, typeUser) {
  if (typeUser === 'client') {
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
