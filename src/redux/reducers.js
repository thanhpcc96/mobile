import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import nav from "../routes/navigationReducer";
import { AuthReducer, ProfileReducer, PickReducer } from "../screens";

export default combineReducers({
  form,
  nav,
  user: AuthReducer,
  profile: ProfileReducer,
  pick: PickReducer
});
