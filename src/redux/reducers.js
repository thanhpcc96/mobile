import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import nav from '../routes/navigationReducer';
import { LoginReducer } from '../screens';

export default combineReducers({
  form,
  nav,
  user: LoginReducer,
});
