import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import {
  navigationClientReducer,
  navigationUserReducer
} from "../routes/navigationReducer";
import {
  AuthReducer,
  ProfileReducer,
  PickReducer,
  TicketReducer,
  PaymentReducer
} from "../screens";
import { CheckScreenReducer } from "../UserScreen";

export default combineReducers({
  form,
  clientNav: navigationClientReducer,
  userNav: navigationUserReducer,
  user: AuthReducer,
  profile: ProfileReducer,
  pick: PickReducer,
  ticket: TicketReducer,
  payment: PaymentReducer,
  managerticket: CheckScreenReducer
});
