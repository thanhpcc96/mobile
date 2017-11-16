import {
  POST_LOGIN_CLIENT,
  POST_LOGIN_CLIENT_SUCCESS,
  POST_LOGIN_CLIENT_ERROR,
  POST_LOGIN_USER,
  POST_LOGIN_USER_ERROR,
  POST_LOGIN_USER_SUCCESS,
  POST_REGISTER_CLIENT,
  POST_REGISTER_CLIENT_ERROR,
  POST_REGISTER_CLIENT_SUCCESS
} from "./actions";

const INITIAL_STATE = {
  error: null,
  isLoading: false,
  isLogged: false,
  token: null,
  info: {},
  typeUser: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_LOGIN_CLIENT:
      return {
        ...state,
        isLoading: true
      };
    case POST_LOGIN_CLIENT_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        token: action.token,
        info: action.user,
        typeUser: "client",
        error: null
      };
    case POST_LOGIN_CLIENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case POST_LOGIN_USER:
      return {
        ...state,
        isLoading: true
      };
    case POST_LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        token: action.token,
        info: action.user,
        typeUser: 'user',
        error: null
      };
    case POST_LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case POST_REGISTER_CLIENT:
      return {
        ...state,
        isLoading: true
      };
    case POST_REGISTER_CLIENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        isLogged: true,
        token: action.token,
        info: action.user,
        typeUser: "client",
        error: null
      };
    case POST_REGISTER_CLIENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
