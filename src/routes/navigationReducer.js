import { routerClient, routerUser } from "./index";

const navigationClientReducer = (state, action) => {
  const newState = routerClient.getStateForAction(action, state);
  return newState || state;
};
const navigationUserReducer = (state, action) => {
  const newState = routerUser.getStateForAction(action, state);
  return newState || state;
};

export { navigationClientReducer, navigationUserReducer };
